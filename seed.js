const {db} = require('./server/db')
const {Student, Campus} = require('./server/db/models/school');

const schools = [{
    name: 'Tulane University', 
    imageUrl: 'https://tulane.edu/sites/default/files/inline-images/campus_aerial533.jpg',
    address: '6823 St Charles Ave, New Orleans, LA 70118',
    description: 'Extremely fun private university located in the heart of New Orleans'
}, {
    name: 'University of California',
    imageUrl: 'https://i0.wp.com/calmatters.org/wp-content/uploads/2022/03/UC-Berkeley.jpg?fit=1200%2C800&ssl=1',
    address: '110 Sproul Hall, Berkeley, CA 94720',
    description: 'Large public school located in the Berkeley hills'
}, {
    name: 'University of Southern California',
    imageUrl: 'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/2XIMXTGKWBLERFTSKXINK3NJVQ.jpg',
    address: '3551 Trousdale Pkwy, Los Angeles, CA 90089',
    description: 'Competitive private university located in south-central LA'
}, {
    name: 'California Polytechnic State University',
    imageUrl: 'https://www.collegetransitions.com/wp-content/uploads/2022/04/cal-poly-1024x670.png',
    address: '1 Grand Ave, San Luis Obispo, CA 93407',
    description: 'Inland state school close to beaches and nature '
}]

const students = [{
    firstName: 'Eric',
    lastName: 'Johnson',
    email: 'ejohnson@gmail.com',
    imageUrl: 'https://d39l2hkdp2esp1.cloudfront.net/img/photo/128391/128391_00_2x.jpg',
    gpa: 2.7,
    campusId: 2
}, {
    firstName: 'Lucy',
    lastName: 'Woods',
    email: 'lucygoosey@yahoo.com',
    imageUrl: 'https://img.freepik.com/free-photo/portrait-happy-african-american-female-college-student-holding-notebooks-backpack-smiling-standing-yellow-background_1258-54844.jpg?w=360',
    gpa: 3.9,
    campusId: 3
}, {
    firstName: 'Andrew',
    lastName: 'Clark',
    email: 'andyc@yahoo.com',
    imageUrl: 'https://alec.org/wp-content/uploads/2015/12/shutterstock_208789324-848x0-c-default.jpg',
    gpa: 3.8,
    campusId: 3
}, {
    firstName: 'Katie',
    lastName: 'Williams',
    email: 'kwilliams@gmail.com',
    imageUrl: 'https://st2.depositphotos.com/4431055/11856/i/950/depositphotos_118565736-stock-photo-young-female-college-student.jpg',
    gpa: 2.1,
    campusId: 1
}]

const seed = async () => {
    try {
      await db.sync({force: true})
  
      await Promise.all(schools.map(school => {
        return Campus.create(school);
      }));

      await Promise.all(students.map(student => {
        return Student.create(student);
      }));
  
      console.log('Seeding success!')
      
    }
    catch (err) {
      console.error('Oh noes! Something went wrong!')
      console.error(err)
     
    }
}
 
seed();

