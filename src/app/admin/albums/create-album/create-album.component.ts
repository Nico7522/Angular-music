import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlbumService } from 'src/app/shared/services/album.service';

@Component({
  selector: 'app-create-album',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.scss'],
})
export class CreateAlbumComponent {
  albumForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _albumService: AlbumService,
    private _router: Router
  ) {
    this.albumForm = this._fb.group({
      title: [null, Validators.required],
      cover: [null],
    });
  }

  createAlbum() {
    if (this.albumForm.valid) {
      this._albumService.create(this.albumForm.value).subscribe({
        next: (res) => {
          console.log(res);
          
        },
        error: (err) => {
          console.log(err);
          
        },
        complete: () => {
          this._router.navigateByUrl('/admin/albums');
        },
      });
    } else {
      this.albumForm.markAllAsTouched();
    }
  }
}
