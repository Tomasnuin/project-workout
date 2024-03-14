import { Component, OnInit } from '@angular/core';
import { Exercise } from './excercise';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  workout: Exercise[] = [
    {   name:'Wall Push Up', difficulty:1, dscription:'', muscle_group:'', reps:0 },
    {   name:'Knee Push Up', difficulty:2, dscription:'', muscle_group:'', reps:0 },
    {   name:'Push Up', difficulty:3, dscription:'', muscle_group:'', reps:0 },
    {   name:'Elevated Push Up', difficulty:4, dscription:'', muscle_group:'', reps:0 },
    {   name:'One hand Push Up', difficulty:5, dscription:'', muscle_group:'', reps:0 },

    {   name:'Half Sit Up', difficulty:1, dscription:'', muscle_group:'', reps:0 },
    {   name:'Assisted Sit Up', difficulty:2, dscription:'', muscle_group:'', reps:0 },
    {   name:'Sit Up', difficulty:3, dscription:'', muscle_group:'', reps:0 },
    {   name:'Assisted One Leg Sit Up', difficulty:4, dscription:'', muscle_group:'', reps:0 },
    {   name:'One Leg Sit Up', difficulty:5, dscription:'', muscle_group:'', reps:0 },

    {   name:'Hang', difficulty:1, dscription:'', muscle_group:'', reps:0 },
    {   name:'Assisted Pull Up', difficulty:2, dscription:'', muscle_group:'', reps:0 },
    {   name:'Pull Up', difficulty:3, dscription:'', muscle_group:'', reps:0 },
    {   name:'One and Half Hands Pull Up', difficulty:4, dscription:'', muscle_group:'', reps:0 },
    {   name:'One Hand Pull Up', difficulty:5, dscription:'', muscle_group:'', reps:0 },

    {   name:'Chair Raises', difficulty:1, dscription:'', muscle_group:'', reps:0 },
    {   name:'Knee Raises', difficulty:2, dscription:'', muscle_group:'', reps:0 },
    {   name:'Leg Raises', difficulty:3, dscription:'', muscle_group:'', reps:0 },
    {   name:'Hanging Knee Raises', difficulty:4, dscription:'', muscle_group:'', reps:0 },
    {   name:'Hanging Leg Raises', difficulty:5, dscription:'', muscle_group:'', reps:0 },

    {   name:'Burprees', difficulty:5, dscription:'', muscle_group:'', reps:0 },
    {   name:'Clmibers', difficulty:5, dscription:'', muscle_group:'', reps:0 },
    {   name:'Reverse Climbers', difficulty:5, dscription:'', muscle_group:'', reps:0 },
    {   name:'Jumping Jacks', difficulty:5, dscription:'', muscle_group:'', reps:0 },
    {   name:'Plank Push Up', difficulty:5, dscription:'', muscle_group:'', reps:0 },
    {   name:'Kip Up', difficulty:5, dscription:'', muscle_group:'', reps:0 },
  ];
}
