import {Component, OnInit} from '@angular/core'
import{FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
    selector: 'app-rows',
    templateUrl: './rows.component.html',
    styleUrls: ['/rows.component.scss']
})
export class RowsComponent implements OnInit{

    userForm : FormGroup;
    listData : any;

    constructor( private fb:FormBuilder){

        this.listData = [];

        this.userForm = this.fb.group({
            name:['',Validators.required],
            sku:['',Validators.required],
            desc:['',Validators.required],
            price:['',Validators.required],
            stocklevel:['',Validators.required]
        })
    }

    public addItem(): void {
        this.listData.push(this.userForm.value);
        this.userForm.reset();
    }

    reset(){
        this.userForm.reset();
    }

    removeItems(element:any){
        this.listData.forEach((value:any,index:any)=>{
            if(value == element)
            this.listData.splice(index,1);
        });
    }

    ngOnInit(){

    }
}