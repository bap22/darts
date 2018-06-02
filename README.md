DARTS
========

Cutthroat cricket

## Dev plan

### Home 
launch new game, see stats, add friends

### Friends
connect with friends and store local (by unique userid and connect code) to play new games

### New Game
select players, start game

### Stats
keep game stats in cloud, so others connected see your stats, and when you play a game with someone elses app it records your stats


## Getting Started

> 

#### 0) Prereqs

- XCode
- react native


#### 1) Clone & Install Dependencies

- 1.1) `git clone`
- 1.2) - cd into your newly created project directory.
- 1.3) Install NPM packages `yarn`

#### 2) Fonts?

- `react-native link`

#### 3) Start app

- 3.1) A useful alias for starting app:

```alias rni="cd ~/Code/cutthroat/; kill $(lsof -t -i:8081); rm -rf ios/build/; react-native run-ios --simulator=\"iPhone X\""```