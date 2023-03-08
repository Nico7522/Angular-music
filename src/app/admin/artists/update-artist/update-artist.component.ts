import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtistService } from 'src/app/shared/services/artist.service';

@Component({
  selector: 'app-update-artist',
  templateUrl: './update-artist.component.html',
  styleUrls: ['./update-artist.component.scss'],
})
export class UpdateArtistComponent implements OnInit {
  artistForm: FormGroup;
  artistId: number;
  constructor(
    private _fb: FormBuilder,
    private _artistService: ArtistService,
    private _activeRoute: ActivatedRoute,
    private _router: Router
  ) {
    this.artistForm = this._fb.group({
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      birthdate: [null],
      deathdate: [null],
    });
    this.artistId = parseInt(this._activeRoute.snapshot.params['id']);
  }

  updateArtist(): void {
    if (this.artistForm.valid) {
      this._artistService
        .update(this.artistId, this.artistForm.value)
        .subscribe({
          error: (err) => {
            console.log(err);
            
          },

          complete: () => {
            this._router.navigateByUrl('admin/artists');
          },
        });
    } else {
      this.artistForm.markAllAsTouched();
    }
  }

  ngOnInit(): void {
    this._artistService.getById(this.artistId).subscribe({
      next: (res) => {
        this.artistForm.patchValue({
          firstname: res.result.firstname,
          lastname: res.result.lastname,
          birthdate: res.result.birthdate,
          deathdate: res.result.deathdate
        });
      },
    });
  }
}
