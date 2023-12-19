export const tags: SwaggerTag[] = [
    { name: 'stock', description: '주식 API' },
    { name: 'users', description: '사용자 API' },
    { name: 'external', description: '외부 OPEN API' },
    { name: 'order', description: '종목 주문 API'}
];

type SwaggerTag = { name: string; description: string };
