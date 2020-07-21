/* one-to-many relation */
const GIRAFES = {
    byIds: {
        '1': {
            enclosureId: '1',
            name: 'Бока',
            weight: 900,
            sex: 'M',
            height: 4.9,
            color: 'Жирафовый',
            diet: 'Шашлычная',
            temper: 'Вспыльчивый',
            image: 'giraffe_goga.jpg'
        },
        '2': {
            enclosureId: '1',
            name: 'Жока (внук Боки)',
            weight: 900,
            sex: 'М',
            height: 4.9,
            color: 'Жирафовый',
            diet: 'Шашлычная',
            temper: 'Вспыльчивый',
            image: 'giraffe_goga.jpg'
        },
        '3': {
            enclosureId: '2',
            name: 'Матильда',
            weight: 600,
            sex: 'Ж',
            height: 3.9,
            color: 'Салатовый',
            diet: 'Веганская',
            temper: 'Женский',
            image: 'giraffe_goga.jpg'
        }
    },
    allIds: ['1', '2', '3']
}

export default GIRAFES;