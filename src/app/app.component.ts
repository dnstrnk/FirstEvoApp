import { Component } from '@angular/core';

interface Book {
  title: string | null;
  author: string | null;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'FirstEvoApp';
  library: Book[] = [
    {
      title: 'Дюна',
      author: 'Герберт'
    }
  ]
  create_book = {
    title: null,
    author: null,
  };

  createBook() {
    this.library.push({
      title: this.create_book.title,
      author: this.create_book.author,
    });
  }
}
