import image from './assets/image.png';
import {TextBlock, ColumnsBlock, ImageBlock, TitleBlock} from "./classes/blocks";

export const model = [
    new TitleBlock( 'Конструктор страницы на Java Script',    {
    tag: 'h2',
        styles: {
        background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
    }}),
    new ImageBlock(image, {
        styles: {
            padding: '2rem',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles:{
            width: '500px',
            height: 'auto'
        },
        alt: 'это картинка'
    }),
new TextBlock( 'here we go to some text', {
    styles: {
        background: 'linear-gradient(to left, #f2994a, #f2c94c)',
        'font-weight': 'bold',
        padding: '1rem'
    }}),

    new ColumnsBlock( [
        '1111111113',
            '22222222',
            '333333333',
        ], { styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            color: '#fff',
            padding: '2rem',
            'font-weight': 'bold'
        }}),



];
