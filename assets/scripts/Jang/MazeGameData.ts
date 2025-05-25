import GameState from "../Controller/CommonUI/GameState";

export default class GameData {
  public static currentLevel: number = 1;
  public static score: number = 0;

  // GameState.character와 항상 연동!
  static get playerType(): "tiger" | "dog" | "rabbit" {
    // "tiger", "dog", "rabbit" 이외 값이 오면 "tiger"로 fallback
    if (GameState && (GameState.character === "tiger" || GameState.character === "dog" || GameState.character === "rabbit")) {
      return GameState.character as "tiger" | "dog" | "rabbit";
    }
    return "tiger";
  }

  static set playerType(value: "tiger" | "dog" | "rabbit") {
    if (GameState) GameState.character = value;
  }

  public static addScore(level: number) {
    this.score += 10;
  }

  public static resetScore() {
    this.score = 0;
  }
}
