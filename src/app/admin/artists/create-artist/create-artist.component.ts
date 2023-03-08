import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArtistService } from 'src/app/shared/services/artist.service';

@Component({
  selector: 'app-create-artist',
  templateUrl: './create-artist.component.html',
  styleUrls: ['./create-artist.component.scss'],
})
export class CreateArtistComponent {
  artistForm!: FormGroup;
  errorMsg: string = '';
  constructor(
    private _fb: FormBuilder,
    private _artistService: ArtistService,
    private _router: Router
  ) {
    this.artistForm = this._fb.group({
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      birthdate: [null],
      deathdate: [null],
    });
  }

  createArtist() {
    if (this.artistForm.valid) {
      this._artistService.create(this.artistForm.value).subscribe({
        error: (err) => {
          console.log(err);

          // Faire un map en cas de multiples erreurs
          if (err.error.msg[0].includes('deathdate')) {
            this.errorMsg =
              "L'année de mort ne peut pas être inférieur à l'année de naissance";
          }
        },
        complete: () => {
          this._router.navigateByUrl('/admin/artists');
        },
      });
    }
  }
}
