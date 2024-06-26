import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

// Define the Category interface
interface Category {
  // Define the properties of the category object
  // Example: name, description, etc.
 // name: string;
  //description: string;
  // Add more properties as needed
}

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private _http: HttpClient) {}

  //load all the cateogries
  public categories() {
    return this._http.get(`${baseUrl}/category/`);
  }
  
  //add new category
  public addCategory(category: Category) {
    return this._http.post(`${baseUrl}/category/`, category);
  }
  
}
