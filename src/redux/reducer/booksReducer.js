import { INITIALIZE_APP, ADD_TO_CART, REMOVE_ITEM, ADD_QUANTITY, SUB_QUANTITY } from "../action/types"

let initialState = {
  "books": [
    {
      "id": 0,
      "title": "Происхождение",
      "author": "Дэн Браун",
      "image": "https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/27624091-den-braun-proishozhdenie-27624091.jpg",
      "price": 710,
      "quantity": 1
    },
    {
      "id": 1,
      "title": "1984",
      "author": "Джордж Оруэлл",
      "image": "https://cv0.litres.ru/sbc/09233908_cover_185-elektronnaya-kniga--.jpg",
      "price": 415,
      "quantity": 1
    },
    {
      "id": 2,
      "title": "Девушка в тумане",
      "author": "Донато Карризи",
      "image": "https://cv2.litres.ru/sbc/31635724_cover_185-elektronnaya-kniga-donato-karrizi-devushka-v-tumane.jpg",
      "price": 464,
      "quantity": 1
    },
    {
      "id": 3,
      "title": "Империя должна умереть",
      "author": "Михаил Зыгарь",
      "image": "https://cv0.litres.ru/sbc/30804904_cover_185-elektronnaya-kniga-mihail-zygar-imperiya-dolzhna-umeret.jpg",
      "price": 741,
      "quantity": 1
    },
    {
      "id": 4,
      "title": "Земное притяжение",
      "author": "Татьяна Устинова",
      "image": "https://cv9.litres.ru/sbc/30087292_cover_185-elektronnaya-kniga-tatyana-ustinova-zemnoe-prityazhenie.jpg",
      "price": 317,
      "quantity": 1
    },
    {
      "id": 5,
      "title": "Зулейха открывает глаза",
      "author": "Гузель Яхина",
      "image": "https://cv5.litres.ru/sbc/17411250_cover_185-elektronnaya-kniga-guzel-yahina-zuleyha-otkryvaet-glaza-2.jpg",
      "price": 254,
      "quantity": 1
    },
    {
      "id": 6,
      "title": "Очаровательный кишечник.",
      "author": "Джулия Эндерс",
      "image": "https://cv7.litres.ru/pub/c/elektronnaya-kniga/cover_120/12178377-dzhuliya-enders-ocharovatelnyy-kishechnik-kak-samyy-moguschestvennyy-organ-upravlyaet-nami-12178377.jpg",
      "price": 573,
      "quantity": 1
    },
    {
      "id": 7,
      "title": "7 навыков высокоэффективных людей",
      "author": "Стивен Кови",
      "image": "https://cv8.litres.ru/pub/c/elektronnaya-kniga/cover_415/4239285--.jpg",
      "price": 347,
      "quantity": 1
    },
    {
      "id": 8,
      "title": "Девушка во льду",
      "author": "Роберт Брындза",
      "image": "https://cv3.litres.ru/pub/c/elektronnaya-kniga/cover_415/27351732-robert-bryndza-12646976-devushka-vo-ldu.jpg",
      "price": 882,
      "quantity": 1
    },
    {
      "id": 9,
      "title": "Магия утра.",
      "author": "Хэл Элрод",
      "image": "https://cv1.litres.ru/pub/c/elektronnaya-kniga/cover_415/19063017-hel-elrod-magiya-utra.jpg",
      "price": 829,
      "quantity": 1
    },
    {
      "id": 10,
      "title": "Азиатская европеизация.",
      "author": "Борис Акунин",
      "image": "https://cv3.litres.ru/sbc/31629439_cover_185-elektronnaya-kniga-boris-akunin-aziatskaya-evropeizaciya-istoriya-rossiyskogo-gosudarstva-car-petr-alekseevich.jpg",
      "price": 389,
      "quantity": 1
    },
    {
      "id": 11,
      "title": "Ведьмак (сборник)",
      "author": "Анджей Сапковский",
      "image": "https://cv6.litres.ru/pub/c/elektronnaya-kniga/cover_415/6375365-andzhey-sapkovskiy-vedmak.jpg",
      "price": 424,
      "quantity": 1
    },
    {
      "id": 12,
      "title": "Атлант расправил плечи",
      "author": "Айн Рэнд",
      "image": "https://cv7.litres.ru/pub/c/elektronnaya-kniga/cover_415/4236675-ayn-rend-atlant-raspravil-plechi.jpg",
      "price": 157,
      "quantity": 1
    },
    {
      "id": 13,
      "title": "Цена вопроса. Том 1",
      "author": "Александра Маринина",
      "image": "https://cv6.litres.ru/sbc/33285466_cover_185-elektronnaya-kniga-aleksandra-marinina-cena-voprosa-tom-1-22638660.jpg",
      "price": 664,
      "quantity": 1
    },
    {
      "id": 14,
      "title": "Исчезнувшая",
      "author": "Гиллиан Флинн",
      "image": "https://cv2.litres.ru/sbc/11029722_cover_185-elektronnaya-kniga-gillian-flinn-ischeznuvshaya.jpg",
      "price": 476,
      "quantity": 1
    },
    {
      "id": 15,
      "title": "Метро 2035",
      "author": "Дмитрий Глуховский",
      "image": "https://cv9.litres.ru/sbc/13698392_cover_185-elektronnaya-kniga-dmitriy-gluhovskiy-metro-2035.jpg",
      "price": 837,
      "quantity": 1
    },
    {
      "id": 16,
      "title": "Снеговик",
      "author": "Ю Несбё",
      "image": "https://cv6.litres.ru/pub/c/elektronnaya-kniga/cover_415/4578362-u-nesbe-snegovik-4578362.jpg",
      "price": 796,
      "quantity": 1
    },
    {
      "id": 17,
      "title": "Как тренировать память.",
      "author": "Джонатан Хэнкок",
      "image": "https://cv1.litres.ru/sbc/14195715_cover_185-elektronnaya-kniga-dzhonatan-henkok-kak-trenirovat-pamyat-ne-dumayte-o-pamyati-luchshe-ispolzuyte-ee-na-vse-sto.jpg",
      "price": 399,
      "quantity": 1
    }
  ],
  addToCart: [],
  total: 0,
  initialize: false
}


export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_APP:
      return {
        ...state,
        initialize: true
      }
    case ADD_TO_CART:
      let currentItem = state.addToCart.find(item => item.id === action.payload.id);
      if (!currentItem) {
        action.payload.quantity = 1
        return {
          ...state,
          addToCart: state.addToCart.concat(action.payload),
          total: state.total + action.payload.price
        }
      } else {
        action.payload.quantity += 1;
        return {
          ...state,
          addToCart: [...state.addToCart],
          total: state.total + action.payload.price
        }
      }
    case REMOVE_ITEM:
      let newBooksItem = state.addToCart.filter(item => action.item !== item)
      return {
        ...state,
        addToCart: newBooksItem,
        total: state.total - (action.item.price * action.item.quantity)
      }
    case ADD_QUANTITY:
      let addedItem = state.addToCart.find(item => item === action.item)
      addedItem.quantity += 1
      return {
        ...state,
        addToCart: [...state.addToCart],
        total: state.total + action.item.price
      }
    case SUB_QUANTITY:
      let deleteItem = state.addToCart.find(item => item === action.item)
      deleteItem.quantity -= 1;
      if (deleteItem.quantity < 1) {

        let newBooksItem = state.addToCart.filter(item => action.item !== item)
        return {
          ...state,
          addToCart: newBooksItem,
          total: state.total - action.item.price
        }
      } else {
        return {
          ...state,
          addToCart: [...state.addToCart],
          total: state.total - action.item.price
        }
      }
    default:
      return state
  }
}
