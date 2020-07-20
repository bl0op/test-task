const ENCLOSURES = 
    [
        {
            id: 1,
            girafes: [
                {
                    id: 0,
                    name: 'Гога',
                    weight: 900,
                    sex: 'M',
                    height: 4.9,
                    color: 'Жирафовый',
                    diet: 'Шашлычная',
                    temper: 'Вспыльчивый',
                    image: 'giraffe_goga.jpg'
                }
            ],
            max: 5,
            actions: [
                {
                    date:  new Date('December 17, 1995 03:24:00'),
                    action: 'Новый жираф',
                    target: 'Гога',
                    status: 0
                }
            ]
        }
    ]

export default ENCLOSURES;