using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace flights.ReadModels
{
    public record FlightRm(
        Guid Id,
        string Airline,
        string Price,
        TimePlaceRm Departure,
        TimePlaceRm Arrival,
        int RemainingNumberOfSeats
    );
   
}