import GenerationInformation from '../pages/GenerationInformation'
import PropertyDetail from '../pages/PropertyDetail'
import PropertyFacilities from '../pages/PropertyFacilities'
import RoomFacilities from '../pages/RoomFacilities'
const SidebarData = [
  {
    key: 1,
    cFlexbox: 'flexbox-sidebar css-nb',
    cText: 'text css-nb-text',
    cNumber: 'bagde__number bagde__color bagde__pill css-bagde',
    title: 'General Information',
    number: 1,
    path: "/registrationDetail/generationInformation",
    main: () => <GenerationInformation/>,
    exact: true
  },
  {
    key: 2,
    cFlexbox: 'flexbox-sidebar css-nb',
    cText: 'text css-nb-text',
    cNumber: 'bagde__number bagde__color bagde__pill css-bagde',
    title: 'Property Detail',
    number: 1,
    path: "/registrationDetail/propertyDetail",
    main: () => <PropertyDetail/>,
  },
  {
    key: 3,
    cFlexbox: 'flexbox-sidebar css-nb',
    cText: 'text css-nb-text',
    cNumber: 'bagde__number bagde__color bagde__pill css-bagde',
    title: 'Property Facilities',
    number: 1,
    path: "/registrationDetail/propertyFacilities",
    main: () => <PropertyFacilities/>,
  },
  {
    key: 4,
    cFlexbox: 'flexbox-sidebar css-nb',
    cText: 'text css-nb-text',
    cNumber: 'bagde__number bagde__color bagde__pill css-bagde',
    title: 'Rooms',
    number: 1,
    path: "/"
  },
  {
    key: 5,
    cFlexbox: 'flexbox-sidebar css-nb',
    cText: 'text css-nb-text',
    cNumber: 'bagde__number bagde__color bagde__pill css-bagde',
    title: 'Room Facilities',
    number: 1,
    path: "/registrationDetail/roomFacilities",
    main: () => <RoomFacilities/>,
  },
  {
    key: 6,
    cFlexbox: 'flexbox-sidebar css-nb',
    cText: 'text css-nb-text',
    cNumber: 'bagde__number bagde__color bagde__pill css-bagde',
    title: 'Photos',
    number: 1,
    path: "/"
  },
  {
    key: 7,
    cFlexbox: 'flexbox-sidebar css-nb',
    cText: 'text css-nb-text',
    cNumber: 'bagde__number bagde__color bagde__pill css-bagde',
    title: 'Payment Information',
    number: 1,
    path: "/"
  }
];
export default SidebarData;