import { makeAutoObservable } from "mobx";
import { ContextDataType } from "../Types/ContextTypes";

class MainStates{
    isDarkMode=false
    selectedData:ContextDataType=undefined
    isOpenMenu=false
    modalStates={
        isDelete: false,
        isAdd: false,
        isEdit: false,
        isLogout: false,
      }
    constructor(){
        makeAutoObservable(this)
    }
    handelOpenModal=(typeOfModal:string, data? : ContextDataType)=> {
        if (data) {
          this.selectedData=data;
        }
        this.modalStates={...this.modalStates,[typeOfModal]:true}
    }
    handelCloseModal=(typeOfModal:string)=> {
        this.modalStates={...this.modalStates,[typeOfModal]:false}

    }
    handelDarkMode=()=> {
        this.isDarkMode=!this.isDarkMode
    }
    handelOpenMenu=()=> {
       this.isOpenMenu=!this.isOpenMenu
    }
    handelCloseMenu=()=> {
        this.isOpenMenu=false
    }
}

const mainStore=new MainStates()

export default mainStore