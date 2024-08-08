import React, { useReducer, createContext, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ADD_GOAL = 'ADD_GOAL';
const DELETE_GOAL = 'DELETE_GOAL';
const VIEW_GOAL_DETAILS = 'VIEW_GOAL_DETAILS';
const EDIT_GOAL = 'EDIT_GOAL';
const SET_GOALS = 'SET_GOALS';

const initialState = {
  goals: [],
  goalDetails: null,
};

function goalReducer(state, action) {
  switch (action.type) {
    case ADD_GOAL:
      return {
        ...state,
        goals: [...state.goals, action.payload],
      };
    case DELETE_GOAL:
      return {
        ...state,
        goals: state.goals.filter(goal => goal.id !== action.payload),
      };
    case VIEW_GOAL_DETAILS:
      return {
        ...state,
        goalDetails: state.goals.find(goal => goal.id === action.payload),
      };
      case EDIT_GOAL:
        const updatedGoals = state.goals.map((goal) =>
          goal.id === action.payload.id ? { ...goal, title: action.payload.title, description: action.payload.description } : goal
        );
        return {
          ...state,
          goals: updatedGoals,
        };
      case SET_GOALS:
        return {
          ...state,
          goals: action.payload,
        };
    default:
      return state;
  }
}

const GoalContext = createContext();

export function GoalProvider({ children }) {
  const [state, dispatch] = useReducer(goalReducer, initialState);

  useEffect(() => {
    const loadGoals = async () => {
      try {
        const storedGoals = await AsyncStorage.getItem('goals');
        if (storedGoals) {
          dispatch({ type: SET_GOALS, payload: JSON.parse(storedGoals) });
        }
      } catch (error) {
        console.error('Failed to load goals from storage', error);
      }
    };
    loadGoals();
  }, []);

  useEffect(() => {
    const saveGoals = async () => {
      try {
        await AsyncStorage.setItem('goals', JSON.stringify(state.goals));
      } catch (error) {
        console.error('Failed to save goals to storage', error);
      }
    };
    saveGoals();
  }, [state.goals]);

  const addGoal = (title, description) => {
    dispatch({
      type: ADD_GOAL,
      payload: { id: Date.now().toString(), title, description },
    });
  };

  const deleteGoal = (id) => {
    dispatch({
      type: DELETE_GOAL,
      payload: id,
    });
  };

  const viewGoalDetails = (id) => {
    dispatch({
      type: VIEW_GOAL_DETAILS,
      payload: id,
    });
  };

  const updateGoal = (id, updatedGoal) => {
    dispatch({ type: EDIT_GOAL, payload: { id, ...updatedGoal } });
  };

  return (
    <GoalContext.Provider
      value={{
        goals: state.goals,
        goalDetails: state.goalDetails,
        addGoal,
        deleteGoal,
        viewGoalDetails,
        updateGoal
      }}
    >
      {children}
    </GoalContext.Provider>
  );
}

export function useGoals() {
  return useContext(GoalContext);
}
