export interface IData {
  categoryId: string;
  id: number;
  image: any;
  workout: string;
  description: string;
  duration: number;
  repeats: Number;
  tags: Array<string>;
}

export const data: IData[] = [
    {
      categoryId: '',
      id: 1,
      image: require('../assets/icons/yoga.png'),
      workout: 'Bench Press',
      description:'This exercise primarily targets the chest muscles (pectorals), shoulders (anterior deltoids), and triceps.',
      duration: 2,
      repeats: 2,
      tags: ['strength', 'powerlifting']
    },
    {
      categoryId: '',
      id: 2,
      image: require('../assets/icons/jogging.png'),
      workout: 'Squats',
      description:'This Exercise targets the lower body muscles, including quadriceps, hamstrings, and glutes',
      duration: 2,
      repeats: 2,
      tags: ['strength', 'powerlifting']
    },
    {
      categoryId: '',
      id: 3,
      image: require('../assets/icons/stretch1.png'),
      workout: 'deadlifts',
      description:'',
      duration: 2,
      repeats: 2,
      tags: ['strength', 'powerlifting']
    },
    {
      categoryId: '',
      id: 4,
      image: require('../assets/icons/pushups.png'),
      workout: 'Shoulder Presses',
      description:'',
      duration: 2,
      repeats: 2,
      tags: ['strength']
    },
    {
      categoryId: '',
      id: 5,
      image: require('../assets/icons/cycle.png'),
      workout: 'Push-ups',
      description:'',
      duration: 2,
      repeats: 2,
      tags: ['strength', 'calisthenics', 'endurance', 'muscle']
    },
    {
      categoryId: '',
      id: 6,
      image: require('../assets/icons/weights.png'),
      workout: 'Pull-ups',
      description:'Engages the back muscles (latissimus dorsi), biceps, and forearms.',
      duration: 2,
      repeats: 2,
      tags: ['strength', 'calisthenics', 'endurance', 'muscle']
    },
    {
      categoryId: '',
      id: 7,
      image: require('../assets/icons/backPlanck.png'),
      workout: 'Dips',
      description:'Primarily targets the chest, shoulders, and triceps while also engaging the core muscles',
      duration: 2,
      repeats: 2,
      tags: ['strength', 'calisthenics', 'endurance', 'muscle', 'equipment']
    },
    {
      categoryId: '',
      id: 8,
      image: require('../assets/icons/backPlanck.png'),
      workout: 'Barbell Rows',
      description:'Focuses on the upper back muscles (rhomboids, traps) and biceps',
      duration: 2,
      repeats: 2,
      tags: ['strength', 'endurance', 'muscle', 'equipment']
    },
    {
      categoryId: '',
      id: 9,
      image: require('../assets/icons/backPlanck.png'),
      workout: 'Overhead Press',
      description:'Targets the shoulder muscles (deltoids), triceps, and upper chest.',
      duration: 2,
      repeats: 2,
      tags: ['strength', 'endurance', 'muscle', 'equipment']
    },
    {
      categoryId: '',
      id: 10,
      image: require('../assets/icons/backPlanck.png'),
      workout: 'Lunges',
      description:'Works the legs unilaterally, engaging quadriceps, hamstrings, glutes, and calves',
      duration: 2,
      repeats: 2,
      tags: ['strength', 'endurance', 'muscle', 'equipment']
    },
    {
      categoryId: '',
      id: 11,
      image: require('../assets/icons/backPlanck.png'),
      workout: 'Romanian Deadlifts',
      description:'Emphasizes the hamstrings and glutes while also engaging the lower back and core.',
      duration: 2,
      repeats: 2,
      tags: ['strength', 'endurance', 'muscle', 'equipment']
    },
    {
      categoryId: '',
      id: 12,
      image: require('../assets/icons/backPlanck.png'),
      workout: 'Leg Press',
      description:'Targets the quadriceps, hamstrings, and glutes while providing lower back support.',
      duration: 2,
      repeats: 2,
      tags: ['strength', 'endurance', 'muscle', 'equipment']
    },
    {
      categoryId: '',
      id: 13,
      image: require('../assets/icons/backPlanck.png'),
      workout: 'Sprints',
      description:'Sprinting at maximum effort for a short duration (e.g., 20-30 seconds) folowed by a brief rest period (1-2 Minutes).',
      duration: 2500,
      repeats: 2,
      tags: ['HIIT', 'calorie burn', 'cardiovascular']
    },
    {
      categoryId: '',
      id: 14,
      image: require('../assets/icons/backPlanck.png'),
      workout: 'Jumping Jacks',
      description:'Performing jumping jacks at a fast pace for 30 - 60 seconds followed by a short rest inteval.',
      duration: 2500,
      repeats: 2,
      tags: ['HIIT', 'calorie burn', 'cardiovascular']
    },
    {
      categoryId: '',
      id: 15,
      image: require('../assets/icons/backPlanck.png'),
      workout: 'Burpees',
      description:'Doing a sequence of squats thrust, push-up, and jump, repeating as many times as possible in a set time frame (30 seconds).',
      duration: 2500,
      repeats: 2,
      tags: ['HIIT', 'calorie burn', 'cardiovascular']
    },
    {
      categoryId: '',
      id: 16,
      image: require('../assets/icons/backPlanck.png'),
      workout: 'Mountain Climbers',
      description:'Alternating knee to Chest movements while in a plank position, performed rapidly for a set duration (20-30 seconds).',
      duration: 2500,
      repeats: 2,
      tags: ['HIIT', 'calorie burn', 'cardiovascular']
    },
    {
      categoryId: '',
      id: 17,
      image: require('../assets/icons/backPlanck.png'),
      workout: 'High Knees',
      description:'running in place while bringing knees up high towards the chest, performed at maximum intensity for a specified time period (45 seconds).',
      duration: 4500,
      repeats: 2,
      tags: ['HIIT', 'calorie burn', 'cardiovascular']
    },
    {
      categoryId: '',
      id: 18,
      image: require('../assets/icons/backPlanck.png'),
      workout: 'Jump Squats',
      description:'Performing a squat followed by an explosive jump, landing softly, and immediately repeating for a set duration or number of repetitions.',
      duration: 4500,
      repeats: 2,
      tags: ['HIIT', 'calorie burn', 'cardiovascular']
    },
    {
      categoryId: '',
      id: 19,
      image: require('../assets/icons/backPlanck.png'),
      workout: 'Box Jumps',
      description:'Jumping onto and off of a sturdy box or platform repeatedly for a set time interval or number of reps.',
      duration: 4500,
      repeats: 2,
      tags: ['HIIT', 'calorie burn', 'cardiovascular']
    },
    {
      categoryId: '',
      id: 20,
      image: require('../assets/icons/backPlanck.png'),
      workout: 'Battle Ropes',
      description:'Using battle ropes to perform waves, slams, or dynamic movements at a high inensity for short intervals with brief rests in between.',
      duration: 4500,
      repeats: 2,
      tags: ['HIIT', 'calorie burn', 'cardiovascular']
    },
    {
      categoryId: '',
      id: 21,
      image: require('../assets/icons/backPlanck.png'),
      workout: 'Cycling Sprints',
      description:'Pedalling at maximum effort on a stationary bike for 20-30 seconds followed by a period of active recovery.',
      duration: 4500,
      repeats: 2,
      tags: ['HIIT', 'calorie burn', 'cardiovascular']
    },
    {
      categoryId: '',
      id: 22,
      image: require('../assets/icons/backPlanck.png'),
      workout: 'Kettlebell Swings',
      description:'Swinging a kettlebell between the legs and up to shoulder level explpsovely, then repeating for a set duration or number of reps.',
      duration: 4500,
      repeats: 2,
      tags: ['HIIT', 'calorie burn', 'cardiovascular']
    },
    {
      categoryId: '',
      id: 23,
      image: require('../assets/icons/backPlanck.png'),
      workout: 'Bodyweight Squats',
      description:'Engages the quadriceps, hamstrings, glutes, and calves, promoting lower body strength and endurance.',
      duration: 4500,
      repeats: 2,
      tags: ['bodyweight', 'calorie burn',]
    },
    {
      categoryId: '',
      id: 24,
      image: require('../assets/icons/backPlanck.png'),
      workout: 'Planks',
      description:'Engages the core muscles (abdominals, obliques, and lower back), promoting core strength and stability.',
      duration: 4500,
      repeats: 2,
      tags: ['bodyweight', 'calorie burn',]
    },
    {
      categoryId: '',
      id: 25,
      image: require('../assets/icons/backPlanck.png'),
      workout: 'Bicycle Crunches',
      description:'Targets the abdominal muscles (rectus abdominis and obliques), while also engaging the hip flexors and stabilizer muscles.',
      duration: 4500,
      repeats: 2,
      tags: ['bodyweight', 'calorie burn',]
    },
    {
      categoryId: '',
      id: 26,
      image: require('../assets/icons/backPlanck.png'),
      workout: 'Hanging Leg Raises',
      description:'Works the abdominal muscles, particularly the lower abs, as well as engaging the hip flexors and grip strength.',
      duration: 4500,
      repeats: 2,
      tags: ['bodyweight', 'calorie burn',]
    },
    {
      categoryId: '',
      id: 27,
      image: require('../assets/icons/backPlanck.png'),
      workout: 'Handstand Push-Ups',
      description:'Targets the shoulders, triceps, and upper chest, while also engaging the core muscles for balance.',
      duration: 4500,
      repeats: 2,
      tags: ['bodyweight', 'calorie burn',]
    },
  ]