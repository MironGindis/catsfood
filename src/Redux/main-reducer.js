const TOGGLE_ACTIVE_MODE = 'TOGGLE_ACTIVE_MODE';

let initialState = {
    Cards : [
            {
                id : 1,
                taste : 'фуа-гра',
                description : [
                    '10 порций',
                    'мышь в подарок'
                ],
                weight : '0,5',    
                underCardInfo : 'Печень утки разварная с артишоками.' ,
                isActive : false,
                isDisabled : false,   
            },
            {
                id : 2,
                taste : 'рыбой',
                description : [
                    '40 порций',
                    '2 мыши в подарок'
                ],
                weight : '2', 
                underCardInfo : 'Головы щучьи с чесноком да свежайшая сёмгушка.',
                isActive : false,
                isDisabled : false,  
            },
            {
                id : 3,
                taste : 'курой',
                description : [
                    '100 порций',
                    '5 мышей в подарок',
                    'заказчик доволен'
                ],
                weight : '5', 
                underCardInfo : 'Филе из цыплят с трюфелями в бульоне.',
                isActive : false,
                isDisabled : true,  
            },
    ]
}

let mainReducer = (state = initialState , action) => {
    switch (action.type) {
        case (TOGGLE_ACTIVE_MODE) : {
            return {
                ...state,
                Cards : state.Cards.map( item => {
                    if (item.id === action.id) {
                        return {
                            ...item, 
                            isActive: !item.isActive,
                        }
                    } else {
                        return {...item}
                    }
                    
                })
            }
        }
        default : return state;
    }
}


export let toggleActiveMode = (id) => ({
    type: TOGGLE_ACTIVE_MODE, id
}) 

export default mainReducer;