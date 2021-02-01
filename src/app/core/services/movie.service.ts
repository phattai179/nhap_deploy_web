import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Movie, MovieDetail } from 'src/app/core/models/movie'
import { ApiService } from './api.service'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient, private api: ApiService) { }

  getMovieList(): Observable<Movie[]> {
    // const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim`

    // let params = new HttpParams()
    // params = params.append('maNhom', 'GP01')
    // return this.http.get<Movie[]>(url, {params})

    const url = `QuanLyPhim/LayDanhSachPhim`;
    let params = new HttpParams()
    params = params.append('maNhom', 'GP01')

    return this.api.get<Movie[]>(url, { params });

  }

  getMovieDetail(movieId: string): Observable<MovieDetail> {
    // const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim`

    // let params = new HttpParams()
    // params = params.append('maPhim', movieId)

    // return this.http.get<MovieDetail>(url, { params })

    const url = `QuanLyPhim/LayThongTinPhim`;
    let params = new HttpParams()
    params = params.append('maPhim', movieId)

    return this.api.get<MovieDetail>(url, {params})
  }

  addMovie(movie: any): Observable<any>{
    const url=`QuanLyPhim/ThemPhimUploadHinh`;
    const formData = new FormData()
    for(let item in movie){
      formData.append(item, movie[item])
    }

    formData.append('maNhom', 'GP01')

    return this.api.post(url, formData)
  }

}
