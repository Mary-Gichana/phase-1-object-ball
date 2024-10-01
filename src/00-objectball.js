function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],

      players: [
        {
          playerName: "Alan Anderson",
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assits: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        {
          playerName: "Reggie Evans",
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },

        {
          playerName: "Brook Lopez",
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        {
          playerName: "Mason Plumlee",
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        {
          playerName: "Jason Terry",
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      ],
    },

    away: {
      teamName: "Charlotte Hornets",
      Colors: ["Turquoise", "Purple"],
      players: [
        {
          playerName: "Jeff Adrien",
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assits: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        {
          playerName: "Bismak Biyombo",
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assits: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        {
          playerName: "DeSagna Diop",
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assits: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        {
          playerName: "Ben Gordon",
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assits: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        {
          playerName: "Brendan Haywood",
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assits: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      ],
    },
  };
}

function numPointsScored(playerName) {
  const game = gameObject();

  for (let teamKey in game) {
    const team = game[teamKey];

    for (let player of team.players) {
      if (player.playerName === playerName) {
        return player.points;
      }
    }
  }
  return "Player not found";
}
console.log(numPointsScored("Ben Gordon"));

function shoeSize(playerName) {
  const game = gameObject();

  for (let teamKey in game) {
    const team = game[teamKey];

    for (let player of team.players) {
      if (player.playerName === playerName) {
        return player.shoe;
      }
    }
  }
  return "Player not found";
}

function teamColors(teamName) {
  const game = gameObject();

  if (game.home.teamName === teamName) {
    return game.home.colors;
  }

  if (game.away.teamName === teamName) {
    return game.away.colors;
  }

  return "Team not found";
}

function teamNames() {
  const game = gameObject();
  return [game.home.teamName, game.away.teamName];
}

function playerNumbers(teamName) {
  const game = gameObject();

  if (game.home.teamName === teamName) {
    return game.home.players.map((player) => player.number);
  }

  if (game.away.teamName === teamName) {
    return game.away.players.map((player) => player.number);
  }

  return "Team not found";
}

function playerStats(playerName) {
  const game = gameObject();

  for (let teamKey in game) {
    const team = game[teamKey];

    for (let player of team.players) {
      if (player.playerName === playerName) {
        const { playerName, ...stats } = player;
        return stats;
      }
    }
  }
  return "Player not found";
}

function bigShoeRebounds() {
  const game = gameObject();
  let largestShoePlayer = null;
  for (let teamKey in game) {
    const team = game[teamKey];
    for (let player of team.players) {
      if (largestShoePlayer === null || player.shoe > largestShoePlayer.shoe) {
        largestShoePlayer = player;
      }
    }
  }

  return largestShoePlayer.rebounds;
}

function mostPointsScored() {
  const game = gameObject();
  let highestPointsPlayer = null;

  for (let teamKey in game) {
    const team = game[teamKey];

    for (let player of team.players) {
      if (
        highestPointsPlayer === null ||
        player.points > highestPointsPlayer.points
      ) {
        highestPointsPlayer = player;
      }
    }
  }

  return highestPointsPlayer.playerName;
}

function winningTeam() {
  const game = gameObject();
  let maxPoints = 0;
  let winningTeamName = "";

  for (let teamKey in game) {
    const team = game[teamKey];
    let totalPoints = 0;

    for (let player of team.players) {
      totalPoints += player.points;
    }

    if (totalPoints > maxPoints) {
      maxPoints = totalPoints;
      winningTeamName = team.teamName;
    }
  }

  return winningTeamName;
}

function playerWithLongestName() {
  const game = gameObject();
  let longestNamePlayer = null;

  for (let teamKey in game) {
    const team = game[teamKey];

    for (let player of team.players) {
      if (
        longestNamePlayer === null ||
        player.playerName.length > longestNamePlayer.playerName.length
      ) {
        longestNamePlayer = player;
      }
    }
  }

  return longestNamePlayer.playerName;
}

function doesLongNameStealATon() {
  const game = gameObject();
  let longestNamePlayer = null;
  let mostStealsPlayer = null;
  for (let teamKey in game) {
    const team = game[teamKey];

    for (let player of team.players) {
      if (
        longestNamePlayer === null ||
        player.playerName.length > longestNamePlayer.playerName.length
      ) {
        longestNamePlayer = player;
      }
    }
  }

  for (let teamKey in game) {
    const team = game[teamKey];

    for (let player of team.players) {
      if (
        mostStealsPlayer === null ||
        player.steals > mostStealsPlayer.steals
      ) {
        mostStealsPlayer = player;
      }
    }
  }

  return longestNamePlayer.playerName === mostStealsPlayer.playerName;
}

console.log(gameObject());
console.log(shoeSize("Alan Anderson"));
console.log(teamColors("Brooklyn Nets"));
console.log(teamNames());
console.log(playerNumbers("Brooklyn Nets"));
console.log(playerStats("Alan Anderson"));
console.log(bigShoeRebounds());
console.log(mostPointsScored());
console.log(winningTeam());
console.log(playerWithLongestName());
