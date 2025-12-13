/*Did you know that giraffes sleep 4.6 hours a day? We humans need more than that. 
If we don’t sleep enough, we accumulate sleep debt.
 In this project we’ll calculate if you’re getting enough sleep each week using
  a sleep debt calculator.

The program will determine the actual and ideal hours of sleep for each 
night of the last week.

Finally, it will calculate, in hours, how far you are from your weekly sleep goal.*/ 

const getSleepHours = day=>{
  if (day === 'monday') {
    return 8;
  } else if (day === 'tuesday') {
     return 8;
  }
  else if (day === 'wednesday') {
     return 8;
  }
  else if (day === 'thursday') {
     return 8;
  }
  else if (day === 'friday') {
     return 8;
  }
  else if (day === 'saturday') {
     return 8;
  }
   else if (day === 'sunday') {
     return 8;
  }
}
 //console.log(getSleepHours('tuesday')); // should print the # hours assigned to tuesday


const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') +  getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday'); 

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

console.log(getActualSleepHours()); // should print the sum of all sleep hours in the week

console.log(getIdealSleepHours()); // if idealHours is 8, should print 56

const calculateSleepDebt = ()=>{
  const actualSleepHours =getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('The user got the perfect amount of sleep.');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('The user got more sleep than needed');
  } else {
    console.log('The user should get some rest');
  }
}
calculateSleepDebt();