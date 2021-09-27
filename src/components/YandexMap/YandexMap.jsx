import React from "react";
import './YandexMap.css'
import { YMaps, Map, Placemark, ZoomControl, mapState } from 'react-yandex-maps';

function YandexMap() {
    return (
        <YMaps>
            <div>
                <Map width = "1050px" height = "476px"
                    defaultState={{
                        center: [41.310044, 69.302399],
                        zoom: 12,
                    }}
                >
                    <Placemark geometry={[41.310044, 69.302399]} />
                    <ZoomControl options={{ float: 'right' }} />
                </Map>
            </div>
        </YMaps>
    )
}

export default YandexMap;