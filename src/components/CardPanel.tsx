'use client'
import Card from "./Card";
import { useReducer } from "react";
export default function CardPanel(){
    const reducerRating = (venueList:Map<string,number>,action:{type:string,venueName:string,rating?:number}) => {
        switch(action.type){
            case 'add':{
                if(action.rating!==undefined){
                    venueList.set(action.venueName,action.rating);
                }
                const newMap = new Map(venueList);
                return newMap
            }
            case 'remove':{
                venueList.delete(action.venueName);
                const newMap = new Map(venueList);
                return newMap
            }
            default: return venueList;
        }
    }
    let defaultList = new Map<string,number>();
    defaultList.set("The Bloom Pavilion",0);
    defaultList.set("Spark Space",0);
    defaultList.set("The Grand Table",0);
    const [venueList,dispatchRating] = useReducer(reducerRating,defaultList);
    return (
        <div>
            <div className="flex justify-around flex-wrap">
                <Card venueName="The Bloom Pavilion" imgSrc="/img/bloom.jpg" onRating={(venue:string,rate:number)=>dispatchRating({type:'add',venueName:venue,rating:rate})}/>
                <Card venueName="Spark Space" imgSrc="/img/sparkspace.jpg" onRating={(venue:string,rate:number)=>dispatchRating({type:'add',venueName:venue,rating:rate})}/>    
                <Card venueName="The Grand Table" imgSrc="/img/grandtable.jpg" onRating={(venue:string,rate:number)=>dispatchRating({type:'add',venueName:venue,rating:rate})}/>
            </div>
            <div className="text-xl mt-[20px]">
                Venue List with Ratings : {venueList.size}
            </div>
            {Array.from(venueList).map(([venue,rate])=><div data-testid={venue}
            onClick={(e)=>dispatchRating({type:'remove',venueName:venue})}>
                {venue} : {rate}
            </div>)}
        </div>
    );
}