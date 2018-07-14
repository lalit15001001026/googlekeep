import { Component, OnInit, Input} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit  {
  imgurl=[]
  setImageUrl=""
  data=""
  dataTitle=""
  enterDone
  rowsWidth=1
  rowsWidthTitle=1
  dataLength
  selectedFile
  dataLengthTitle
  date:Date
  time
  reminderActive=""
  colorText="black"
  onFileSelected(event)
  {
    this.selectedFile=event.target.files[0]
    console.log(this.selectedFile)
  }
  reminderActiveChange()
  {
    if(!this.reminderActive)
    this.reminderActive="true"
    else
    this.reminderActive=""
  }
  onDateSelected(ev)
  {
    console.log("active")
this.date=ev.target.value
  }
  image2()
  {
    
  }
  selectedDate(ev)
  {
    this.date
  }
  sizeIncrease(ev)
  { this.dataLength=this.data.length
    if(this.dataLength>47)
     this.rowsWidth=Number(this.dataLength/50)+1;
  }

  onTimeSelected(ev)
  {
    this.time=ev.target.value
  }

    imageSelector()
    {
      if(this.setImageUrl=="")
      this.setImageUrl="true"
      else
      this.setImageUrl=""
    }


    sizeIncreaseTitle(ev)
    { this.dataLengthTitle=this.dataTitle.length
    if(this.dataLengthTitle>47)
     this.rowsWidthTitle=Number(this.dataLengthTitle/50)+1;
    }

    colorChange()
    {
      console.log("clicked")
      if(this.colorText=="black")
      this.colorText="pink"
      else if (this.colorText=="pink") 
      this.colorText="blue"
      else if(this.colorText=="blue")
      this.colorText="red"
      else if(this.colorText=="red")
      this.colorText="violet"
      else if(this.colorText=="violet")
      this.colorText="green"
      else if(this.colorText=="green")
      this.colorText="orange"
      else if(this.colorText=="orange")
      this.colorText="black"
    }

 changeNote(ev)
 {
   this.data=ev.target.value
 }

 changeNoteTitle(ev)
 {
   this.dataTitle=ev.target.value
 }

 ngOnInit()
 {

 }

}
