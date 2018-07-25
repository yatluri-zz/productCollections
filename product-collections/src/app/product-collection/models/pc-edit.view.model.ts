import {Labels} from '../interfaces/Labels';
import {MediaCollection} from '../../shared/interfaces/MediaCollection';
import {Media} from '../interfaces/Media';
export class ProductCollectionEditView{
    productCollectionName: string;
    productCollectionCaption: string;
    propHeader: string;
    imageHeader: string;
    collectionName: string;
    productLevels:Array<string>;
    productCollectionLabels:Labels;
    imageDesc: string;
    isGlobal: boolean;
    mediaPath:string;
    mediaCollection:Array<MediaCollection>; 

    mediaPathGenerator(mediaObject:Array<Media>){
        if(mediaObject && mediaObject !== undefined){
           mediaObject.forEach((v,k)=>{
               if(v.IsCustomImage === 'Y'){
                   console.log(v);
               }else{
                   console.log(v);
               }
           });  
        }        
    }
}