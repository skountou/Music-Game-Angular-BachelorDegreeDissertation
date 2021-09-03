import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { DialogScoreComponent } from '../dialog-score/dialog-score.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  public selectedNote: string | undefined;

  public noteList = [
    {
      name: 'C',
      class: 'whiteKey cKey',
    },
    {
      name: 'Db',
      class: 'blackKey dbKey',
    },
    {
      name: 'C#',
    },
    {
      name: 'D',
      class: 'whiteKey dKey',
    },
    {
      name: 'Eb',
      class: 'blackKey ebKey',
    },
    {
      name: 'D#',
    },
    {
      name: 'E',
      class: 'whiteKey eKey',
    },
    {
      name: 'F',
      class: 'whiteKey fKey',
    },
    {
      name: 'Gb',
      class: 'blackKey gbKey',
    },
    {
      name: 'F#',
    },
    {
      name: 'G',
      class: 'whiteKey gKey',
    },
    {
      name: 'Ab',
      class: 'blackKey abKey',
    },
    {
      name: 'G#',
    },
    {
      name: 'A',
      class: 'whiteKey aKey',
    },
    {
      name: 'Bb',
      class: 'blackKey bbKey',
    },
    {
      name: 'A#',
    },
    {
      name: 'B',
      class: 'whiteKey bkey',
    },
    {
      name: 'C',
      class: 'whiteKey cKey1',
    },
    {
      name: 'Db',
      class: 'blackKey dbKey1',
    },
    {
      name: 'C#',
    },
    {
      name: 'D',
      class: 'whiteKey dKey1',
    },
    {
      name: 'Eb',
      class: 'blackKey ebKey1',
    },
    {
      name: 'D#',
    },
    {
      name: 'E',
      class: 'whiteKey eKey1',
    },
    {
      name: 'F',
      class: 'whiteKey fKey1',
    },
    {
      name: 'Gb',
      class: 'blackKey gbKey1',
    },
    {
      name: 'F#',
    },
    {
      name: 'G',
      class: 'whiteKey gKey1',
    },
    {
      name: 'Ab',
      class: 'blackKey abKey1',
    },
    {
      name: 'G#',
    },
    {
      name: 'A',
      class: 'whiteKey aKey1',
    },
    {
      name: 'Bb',
      class: 'blackKey bbKey1',
    },
    {
      name: 'A#',
    },
    {
      name: 'B',
      class: 'whiteKey bkey1',
    },
  ];

  public score: number = 0;
  public lives: number = 3;
  public gameOverText = 'Game Over!';
  public gameOver = false;
  private interval: any;
  times: number = 0;



  constructor(private router: Router, private dialogService: NbDialogService) {}

  ngOnInit(): void {
    this.times = 0;
    this.interval = setInterval(() => {
      if (this.noteList?.length && this.times > 0) {
        this.selectedNote = this.generateNote();
        let audio = new Audio();
        let note = this.selectedNote;
        if (this.selectedNote.includes('#')) {
          note = note.replace('#', '_');
        }
        audio.src = `../../assets/notes/${note}.wav`;
        audio.load();
        audio.play();
      }
      this.times++;
    }, 10000);
  }


  navToMainMenu() {
    this.router.navigate(['/./']);
  }

  generateNote(): string {
    const note = Math.floor(Math.random() * (this.noteList?.length || 16));
    return this.noteList[note].name;
  }

  createLifeArray(): number[] {
    if (this.lives) {
      return Array(this.lives).fill(4);
    } else {
      return [];
    }
  }

  createNonLifeArray(): number[] {
    return Array(3 - this.lives).fill(4);
  }

  restartGame() {
    this.gameOver = false;
    this.times = 0;
    this.selectedNote = undefined;
    this.lives = 3;
    this.score = 0;
    this.interval = setInterval(() => {
      if (this.noteList?.length && this.times > 0) {
        this.selectedNote = this.generateNote();
        let audio = new Audio();
        let note = this.selectedNote;
        if (this.selectedNote.includes('#')) {
          note = note.replace('#', '_');
        }
        audio.src = `../../assets/notes/${note}.wav`;
        audio.load();
        audio.play();
      }
      this.times++;
    }, 10000);
  }

  addScore(pianoButton: string) {
    let audio = new Audio();
    if (!this.gameOver) {
      if (this.selectedNote === pianoButton) {
        this.score += 100;
      } else {
        this.lives -= 1;
        audio.src = `../../assets/notes/mistake.mp3`;
        audio.load();
        audio.play();
      }
      if (this.lives === 0) {
        this.gameOver = true;
        audio.src = `../../assets/notes/game_over.mp3`;
        audio.load();
        audio.play();
        clearInterval(this.interval);
        this.openScore();
      }
    }
  }

  openScore() {
    this.dialogService.open(DialogScoreComponent, {
      context: {
        score: this.score,
      },
    });
  }
}
