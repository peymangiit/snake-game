import { onSnake, expandSnake} from './snake.js'
import { randomGirdPosition } from './grid.js'

let food = getRandomFoodPosition()
const EXPANTION_RATE = 1


export function update(){
    if (onSnake(food)) {
        expandSnake(EXPANTION_RATE)
        food = getRandomFoodPosition()
        
    }
   
}

export function draw(gameBoard) {
    
        const foodElement = document.createElement('div')
        foodElement.style.gridRowStart = food.y
        foodElement.style.gridColumnStart = food.x
        foodElement.classList.add('food')
        gameBoard.appendChild(foodElement)

}

function getRandomFoodPosition() {
    let newFoodPosition
    while ( newFoodPosition==null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGirdPosition()
    }
    return newFoodPosition
}