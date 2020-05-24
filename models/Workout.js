const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Doesn't validate certain workouts as lifting & cardio have different options.
const workoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter the type of exercise, e.g. 'bench press', 'lifting', etc."
  },
  duration: {
    type: Number,
    required: "Enter the amount of time"
  },
  weight: {
    type: Number
  },
  sets: {
    type: Number
  },
  reps: {
    type: Number
  },
  distance: {
    type: Number
},
  date: {
    type: Date,
    default: Date.now
  }
});
// combines the total amount of exercise conducted by time for graph functionality.
workoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;