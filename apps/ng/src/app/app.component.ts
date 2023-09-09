import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppService } from './app.service';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  standalone: true,
  imports: [RouterModule, AsyncPipe, JsonPipe],
  selector: 'nx-ng-nest-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  message$ = this.appService.getMessage();

  constructor(private readonly appService: AppService) {}
}
