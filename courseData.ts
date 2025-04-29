// src/data/courseData.ts

export const courseData = {
    progress: 25,
    currentLevel: 'Beginner Level',
    courses: [
      {
        id: 1,
        title: 'Java Fundamentals',
        description: 'Learn the basics of Java programming',
        modules: [
          'Introduction to Java',
          'Variables and Data Types',
          'Control Flow',
          'Functions and Methods'
        ],
        progress: 40
      },
      {
        id: 2,
        title: 'Object-Oriented Programming',
        description: 'Master OOP concepts in Java',
        modules: [
          'Classes and Objects',
          'Inheritance',
          'Polymorphism',
          'Encapsulation'
        ],
        progress: 20
      },
      {
        id: 3,
        title: 'Data Structures',
        description: 'Learn essential data structures in Java',
        modules: [
          'Arrays and Lists',
          'Stacks and Queues',
          'Trees and Graphs',
          'Hash Tables'
        ],
        progress: 0
      },
      {
        id: 4,
        title: 'Advanced Java Concepts',
        description: 'Explore advanced Java programming topics',
        modules: [
          'Exception Handling',
          'Multithreading',
          'File I/O',
          'Network Programming'
        ],
        progress: 0
      }
    ],
    assignments: [
      {
        id: 1,
        title: 'Basic Syntax Quiz',
        dueDate: 'Tomorrow',
        type: 'Quiz'
      },
      {
        id: 2,
        title: 'Variables Assignment',
        dueDate: '3 days',
        type: 'Programming'
      },
      {
        id: 3,
        title: 'Control Flow Challenge',
        dueDate: '1 week',
        type: 'Challenge'
      }
    ],
    achievements: [
      {
        id: 1,
        title: 'First Program',
        description: 'Write your first Java program',
        completed: true
      },
      {
        id: 2,
        title: 'Bug Hunter',
        description: 'Fix 5 programming errors',
        completed: false
      },
      {
        id: 3,
        title: 'Code Master',
        description: 'Complete all basic exercises',
        completed: false
      }
    ]
  };
  