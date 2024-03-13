export interface IData {
  id: number;
  image: any;
  workout: string;
}

export const data: IData[] = [
    {
      id: 1,
      image: require('../assets/icons/yoga.png'),
      workout: 'Yoga'
    },
    {
      id: 2,
      image: require('../assets/icons/jogging.png'),
      workout: 'Jumping Jacks'
    },
    {
      id: 3,
      image: require('../assets/icons/stretch1.png'),
      workout: 'Russian Twist'
    },
    {
      id: 4,
      image: require('../assets/icons/pushups.png'),
      workout: 'Push Ups'
    },
    {
      id: 5,
      image: require('../assets/icons/cycle.png'),
      workout: 'Bicycle walk'
    },
    {
      id: 6,
      image: require('../assets/icons/weights.png'),
      workout: 'Lift Weights'
    },
    {
      id: 7,
      image: require('../assets/icons/backPlanck.png'),
      workout: 'Plank'
    },
  ]