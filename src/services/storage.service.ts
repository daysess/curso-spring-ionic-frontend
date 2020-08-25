import { Injectable } from "@angular/core";
import { LocalUser } from "../models/local_user";
import { STORAGE_KEYS } from "../config/storage_keys.config";
import { Cart } from "../models/cart";

@Injectable()
export class StorageService {
	
	getLocalUser() : LocalUser {
		let usr = localStorage.getItem(STORAGE_KEYS.localUser);
		if(usr == null){
			return null;
		}else{
			return JSON.parse(usr);
		}
	}

	setLocalUser(obj : LocalUser) {
        if(obj == null){
            localStorage.removeItem(STORAGE_KEYS.localUser);
        }else{
            localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));
        }
	}

	getCart() : Cart {
		let usr = localStorage.getItem(STORAGE_KEYS.cart);
		if(usr == null){
			return null;
		}else{
			return JSON.parse(usr);
		}
	}

	setCart(obj : Cart) {
        if(obj == null){
            localStorage.removeItem(STORAGE_KEYS.cart);
        }else{
            localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(obj));
        }
	}

	
}