export type optionCityType = {
    name: string;
    country: string;
    lat: number;
    lon: number;

};

export type forecastTyper = {
    name: string;
    country: string;
    sunrise: number;
    sunset: number;
    list: [
        {
            dt: number;
            main: {
                feels_like: number;
                humidty: number;
                pressure: number;
                temp: number;
                temp_max: number;
                temp_min: number;
            };
            weather: [
                {
                    main: string;
                    icon: string;
                    description: string;
                }
            ];
            wind: {
                speeed: number;
                deg: number; gust: number;
            };
            clouds: {
                all: number;

            };
            visibility: number;
        }
    ]
}