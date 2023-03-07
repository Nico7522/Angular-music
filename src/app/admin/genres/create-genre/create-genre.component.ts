import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Genre } from 'src/app/shared/models/genre';
import { GenreService } from 'src/app/shared/services/genre.service';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.scss'],
})
export class CreateGenreComponent {
  genreForm: FormGroup;
  uniqueNameError : string = ''
  constructor(private _fb: FormBuilder, private _genreService : GenreService, private _router : Router) {
    this.genreForm = this._fb.group({
      name: [null, [Validators.required, Validators.maxLength(50)]],
    });
  }

  createGenre(): void {
    if (this.genreForm.valid) {
      this._genreService.create(this.genreForm.value).subscribe({
        next: (res) => {
          console.log(res);
          
        },
        error: (err) => {
          console.log(err);
          if (err.error.statusCode === 409) {
            this.uniqueNameError = 'Le nom existe déjà'
          }
          
        },
        complete: () => {
          this._router.navigateByUrl('/admin/genres')
        },
      })
    } else {
      this.genreForm.markAllAsTouched()
    }
  }
}
