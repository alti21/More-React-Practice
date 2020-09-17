import React, { useState, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import BudgetInput from './components/input/BudgetInput';
import IncomeOutputList from './components/output/IncomeOutputList';
import IncomeOutput from './components/output/IncomeOutput';

// initial state
const data = {
  allItems: {
      exp: [],
      inc: []
  },
  totals: {
      exp: 0,
      inc: 0
  },
  budget: 0,
  percentage: -1
};



    

     const calcPercentage = (totalIncome) =>
        {
            if(totalIncome > 0)
            {
                this.percentage = Math.round((this.value / totalIncome) * 100);
            }
            else 
            {
                this.percentage = -1;
            }
        }

      const getPercentage = () =>
        {
            return this.percentage;
        }

    


const budgetReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_INCOME_ITEM':
      return { //USE PAYLOAD
        ...state, 
        allItems: action.payload
      }
  }
}


const addItem = (type, des, val) => {
  let newItem, ID;
  //select last id in array
  //create new ID
  if(data.allItems[type].length > 0)
  {
      ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
  }
  else // if no income or expenses
  {
      ID = 0;
  }

  //create new item based on 'inc' or 'exp' type
  if(type === 'exp')
  {
      //newItem = new Expense(ID, des, val); //click to make new component?
     // newItem = {ID: ID, des: des, val: val};
  }
  else if (type === 'inc')
  {
     // newItem = new Income(ID, des, val);
  }
  
  //push it into our data structure
  data.allItems[type].push(newItem);

  //return the new element
  return newItem;
}




const App = () => {

  const [budget, dispatchBudget] = useReducer( //budget is current state
    budgetReducer,
    {
      allItems: {
        exp: [],
        inc: []
      },
      totals: {
        exp: 0,
        inc: 0
      },
      budget: 0,
      percentage: -1
    } //INITIAL STATE
  );

  const [incomes, setIncomes] = useState( [{
      desc: 'desc1',
      type: '-'
    },
    {
      desc: 'desc2',
      type: '+'
    }]); // incomes will be array of income objects/components
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');

  const incomeObj = {
    desc: description,
    budgetType: type
  }

  let incomeObjArray = [
    {
      desc: 'desc1',
      type: '-'
    },
    {
      desc: 'desc2',
      type: '+'
    },
];


  const handleIncomeObjArray = () => {
    // const incomes = this.state.players.slice(0);

    // incomes.push({
    //   name: 'Maul',
    //   id: 26
    // });
  
    // this.setState({
    //   players: players,
    // });


    setIncomes(incomes.concat(incomeObj));
    console.log(incomes + "testing");
  }

  const handleChange = (event) => {  //this handler is called in the child component BudgetInput
    setDescription(event.target.value);
    console.log(incomeObj.desc)
  }

  const handleSelectChange = (event) => {  //this handler is called in the child component BudgetInput
    setType(event.target.value);
  }

//make incomeOutput appear when button in BudgetInput is clicked
  return (
    <div className="App">

      <BudgetInput 
        descValue={description}
        onDescChange={handleChange}
        onSelectChange={handleSelectChange}
        type={type}
        onBudgetSubmit={handleIncomeObjArray}
      />

      {/* <IncomeOutput 
        obj={incomeObj}
      /> */}

      {/* <IncomeOutput 
        desc={description}
        type={type}
      /> */}

      <IncomeOutputList 
        list={incomes}
      /> 
    </div>
  )
};


export default App;