import MixinStorage "blob-storage/Mixin";
import Storage "blob-storage/Storage";
import Array "mo:core/Array";
import Map "mo:core/Map";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Text "mo:core/Text";

actor {
  include MixinStorage();

  type Video = {
    title : Text;
    thumbnail : Storage.ExternalBlob;
    description : Text;
    videoLink : Text;
  };

  module Video {
    public func compare(video1 : Video, video2 : Video) : Order.Order {
      Text.compare(video1.title, video2.title);
    };
  };

  type Game = {
    title : Text;
    coverImage : Storage.ExternalBlob;
    description : Text;
  };

  module Game {
    public func compare(game1 : Game, game2 : Game) : Order.Order {
      Text.compare(game1.title, game2.title);
    };
  };

  // Persistent storage for games and videos
  let games = Map.empty<Text, Game>();
  let videos = Map.empty<Text, Video>();

  // Add a new game
  public shared ({ caller }) func addGame(title : Text, coverImage : Storage.ExternalBlob, description : Text) : async () {
    let game : Game = {
      title;
      coverImage;
      description;
    };
    games.add(title, game);
  };

  // Add a new video
  public shared ({ caller }) func addVideo(title : Text, thumbnail : Storage.ExternalBlob, description : Text, videoLink : Text) : async () {
    let video : Video = {
      title;
      thumbnail;
      description;
      videoLink;
    };
    videos.add(title, video);
  };

  // Retrieve all games
  public query ({ caller }) func getAllGames() : async [Game] {
    games.values().toArray().sort();
  };

  // Retrieve all video content
  public query ({ caller }) func getAllVideos() : async [Video] {
    videos.values().toArray().sort();
  };

  // Get game by title
  public query ({ caller }) func getGame(title : Text) : async Game {
    switch (games.get(title)) {
      case (null) { Runtime.trap("Game not found") };
      case (?game) { game };
    };
  };

  // Get video by title
  public query ({ caller }) func getVideo(title : Text) : async Video {
    switch (videos.get(title)) {
      case (null) { Runtime.trap("Video not found") };
      case (?video) { video };
    };
  };
};
