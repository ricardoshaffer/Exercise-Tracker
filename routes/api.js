const router = require("express").Router();
const Workout = require("../models/Workout");
// Gets workout information
router.get("/api/workouts", (request, response) => {
  Workout.find()
    .then(workouts => response.json(workouts))
    .catch(err => response.json(err));
});
// returns workout information for a range for graph/chart
router.get("/api/workouts/range", (request, response) => {
  Workout.find({})
    .then(workouts => {
      response.json(workouts);
    })
    .catch(err => response.json(err));
});
// creates a brand new workout session
router.post("/api/workouts", (request, response) => {
  Workout.create({
    day: Date.now()
  })
    .then(newWorkout => {
      response.json(newWorkout);
    })
    .catch(err => response.json(err));
});
//allows user to finish/update a current workout
router.put("/api/workouts/:id", (request, response) => {
  Workout.findByIdAndUpdate(
    request.params.id,
    { $push: { exercises: request.body } },
    { new: true }
  )
    .then(workout => response.json(workout))
    .catch(err => response.json(err));
});

module.exports = router;