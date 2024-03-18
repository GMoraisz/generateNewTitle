import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TesteComponent } from "./teste/teste.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, TesteComponent]
})
export class AppComponent {
  title = 'Título do Aplicativo';
  newTitle = "";

      setNewTitle (event: Event) {
        this.newTitle = (<HTMLInputElement>event.target).value;

      }

      changeTitle () {
          this.title = this.newTitle;
      }
}
