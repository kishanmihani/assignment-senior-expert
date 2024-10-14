
export const ProductService = {
    getProductsData() {
      return [
        {
          id: '1000',
          image: 'logo-1.svg',
        },
        {
          id: '1001',
          image: 'logo-2.svg',
        },
        {
          id: '1002',
          image: 'logo-3.svg',
        },
        {
          id: '1003',
          image: 'logo-4.svg',
        },
        {
          id: '1004',
          image: 'logo-5.svg',
        },
        {
          id: '1005',
          image: 'logo-6.svg',
        },
        {
          id: '1006',
          image: 'logo-7.svg',
        },
        {
          id: '1007',
          image: 'logo-8.svg',
        },
        {
          id: '1008',
          image: 'logo-9.svg',
        },
        {
          id: '1009',
          image: 'logo-10.svg',
        },
        {
          id: '1010',
          image: 'logo-11.svg',
        },
        {
          id: '1011',
          image: 'logo-12.svg',
        },
        {
          id: '1012',
          image: 'logo-13.svg',
        },
        {
          id: '1013',
          image: 'logo-14.svg',
        },
        {
          id: '1014',
          image: 'logo-15.svg',
        },
        {
          id: '1015',
          image: 'logo-16.svg',
        },
        {
          id: '1016',
          image: 'logo-17.svg',
        },
        {
          id: '1017',
          image: 'logo-18.svg',
        },
        {
          id: '1018',
          image: 'logo-19.svg',
        },
        {
          id: '1019',
          image: 'logo-20.svg',
        },
        {
          id: '1020',
          image: 'logo-21.svg',
        },
        {
          id: '1021',
          image: 'logo-22.svg',
        },
        {
          id: '1022',
          image: 'logo-23.svg',
        },
        {
          id: '1023',
          image: 'logo-24.svg',
        },
        {
          id: '1024',
          image: 'logo-25.svg',
        },
        {
          id: '1025',
          image: 'logo-26.svg',
        },
        {
          id: '1026',
          image: 'logo-27.svg',
        },
        {
          id: '1027',
          image: 'logo-28.svg',
        },
        {
          id: '1028',
          image: 'logo-29.svg',
        },
        
      ];
    },
    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
      }
}
