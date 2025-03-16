import DateReserve from "@/components/DateReserve";
import { MenuItem, Select, TextField } from "@mui/material";

export default function Booking(){
    return(
        <main>
            <div className="bg-cyan-100 w-[290px] ml-[15px] pb-[15px] rounded-xl">
                <div>
                    <div className="text-lg ml-[15px] mt-[25px] pt-[15px]">Enter your Name-Lastname</div>
                    <TextField className="ml-[15px]" variant="standard" name="Name-Lastname" label="Name-Lastname"/><br/>
                </div>
                <div>
                    <div className="text-lg ml-[15px] mt-[25px]">Enter your contact number</div>
                    <TextField className="ml-[15px]" variant="standard" name="Contact-Number" label="Contact-Number"/>
                </div>
                <div>
                    <div className="text-lg ml-[15px] mt-[25px]">Select the venue</div>
                    <Select className="ml-[15px] w-[195px]" variant="standard" id="venue">
                        <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                        <MenuItem value="Spark">Spark Space</MenuItem>
                        <MenuItem value="GrandTable">The Grand Table</MenuItem>
                    </Select>
                </div>
                <div className="mt-[25px] ml-[15px]">
                <div className="text-lg mb-[15px] mt-[25px]">Select the renting date</div>
                    <DateReserve/>
                </div>
                <button className="bg-indigo-300 mt-[25px] ml-[15px] w-[120px] py-[5px] hover:bg-red-300 rounded-lg" name="Book Venue">Book Venue</button>
            </div>
        </main>
    );
}