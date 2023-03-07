import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GenreService } from 'src/app/shared/services/genre.service';

@Component({
  selector: 'app-update-genre',
  templateUrl: './update-genre.component.html',
  styleUrls: ['./update-genre.component.scss']
})
export class UpdateGenreComponent implements OnInit {

  genreForm : FormGroup
  genreId: number
  uniqueNameError : string = ''

  constructor(private _fb: FormBuilder, private _genreService : GenreService, private _router : Router, private _activeRoute : ActivatedRoute) {
    this.genreForm = this._fb.group({
      name: [null, [Validators.required, Validators.maxLength(50)]],
    });

    this.genreId = parseInt(this._activeRoute.snapshot.params['id'])
  }

  updateGenre() : void {
    if (this.genreForm.valid) {
      this._genreService.update(this.genreId, this.genreForm.value).subscribe({
        error: (err) => {
          if (err.error.statusCode === 409) {
            this.uniqueNameError = 'Le nom existe déjà'
          }
        },
        complete : () => {
          this._router.navigateByUrl('admin/genres')
        }
      })
    } else {
      this.genreForm.markAllAsTouched
    }
  }

  ngOnInit(): void {
      this._genreService.getById(this.genreId).subscribe({
        next: (res) => {
          this.genreForm.patchValue({
            name: res.result.name
          })
        },
        error: (err) => {
         
        },
        complete: () => {}
      })
  }
}
