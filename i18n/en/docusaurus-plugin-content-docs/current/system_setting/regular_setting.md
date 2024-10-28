# General Settings

This module allows configuration of APIPark's general settings, including the API call address displayed on the API portal and the service categorization information bound to services.

## Configuring API Request Address

On the API Park platform, the **API Request Address** setting is used to specify the base URL for interface calls, which provides a prefix for the full path of API requests. Once the API request address is configured in the system settings, the platform automatically applies it as a prefix to both the display in API documentation and the actual request path, ensuring a consistent address format and enhancing management and call convenience.

### Key Functional Logic

1. **Set Base URL**: Administrators can configure the `API Request Address` in the "General Settings" under system settings, such as `http://api.apipark.com`. This serves as the foundational path for the platform's APIs, prefixing all API call addresses.
2. **Document Display**: In the API portal, when users view API documents, the configured base URL automatically appears before the API address. For example, the path for a translation API `/demo_translation_api` would be displayed as `http://api.apipark.com/demo_translation_api`.
3. **Unified Call Path**: By setting a unified `API Request Address` in the system, users only need to focus on the specific API resource path during calls without manually appending the base path, reducing the risk of errors and configuration complexities.
4. **Dynamic Updates**: If the `API Request Address` changes, all API paths displayed in documentation automatically update to maintain consistency between documentation and actual call addresses, ensuring system flexibility and ease of maintenance.

### Application Scenarios

- **Unified Management**: Suitable for scenarios requiring uniform management of API request addresses, ensuring all API services are published under the same domain or base path for easy maintenance and security control.
- **Multi-Environment Support**: Different `API Request Addresses` can be used across various environments (like development, testing, production) without modifying each API's path configuration.

### Operation Steps

1. Click on `System Settings` -> `General` to enter the general settings page

![](images/2024-10-27/c9750acf1556d8fd7f2e50707a4578ffa3da52adee16c0d60a9e11dedb039167.png)  

2. Input the API call address in the format `http/https` + `://` + `{ip}`/`domain` + `port`. After completion, click `Save`.

![](images/2024-10-27/8bc34ff09e6add980d896785ded571e3eb0b0b37d01a0ffdd5dd8a4b6c6f9743.png)  

Once configured, the API call address will automatically populate in the documentation as shown below:

![](images/2024-10-27/dbb52cc5f7343f9c8fed8d8e6774ab821a90402c0dffead48517c8ee157db511.png)  

## Service Categorization

On the API Park platform, the **Service Categorization Module** is used for organizing and managing different types of services. When services are created (including REST services and AI services), the system requires them to be bound to a service category, facilitating filtering and browsing services by category in the API portal. This module enhances the organization of service management and aids users in quickly finding required services in the API portal.

### Key Features

1. **Category Binding**: Each newly created service must be bound to a service category. This allows both REST and AI services to be organized by function or application scenario, facilitating management and use.
2. **Service Filtering**: In the API portal, users can filter the service list based on service categories. This allows users to locate services quickly through categories, particularly effective when there are many services.
3. **Subcategory Support**: The service categorization module supports the creation of subcategories for more detailed category management. For example, different fields of subcategories can be created under the "AI Services" category (such as natural language processing, computer vision, etc.), helping users to find specific services more accurately.
4. **Sorting Functionality**: Categories and subcategories support sorting, allowing administrators to adjust the display order based on priority or frequency of use, making important or frequently used categories more prominent.

### Application Scenarios

- **Clear Category Management**: Through layered management and display of services, allowing developers, testers, and business personnel to quickly find required services.
- **Enhanced User Experience**: In the API portal, service categorization aids users in filtering and locating needed services, especially effective in scenarios with extensive service offerings and applications.

The service categorization module plays a crucial role in organization and navigation on the API Park platform. Through features like category binding, filtering, subcategories, and sorting, it provides an efficient solution for managing, using, and finding services, greatly optimizing the user experience and system maintainability.

### Operation Steps

#### Create a New Category
1. Click on `System Settings` -> `General` to enter the general settings page, then click `New Category`.
![](images/2024-10-27/a9722c3b5e93e9fd44d0285f1280b204c6bc27a6bcdb2694d17f960d5a83737d.png)  

2. Fill in the category name in the popup box and click `Confirm`.
![](images/2024-10-27/6b6fd72e3fc0ce796d7cfcc50400ed772d58dcfc189c3fc0d7921635e95f1670.png)  

#### Create a New Subcategory
1. Click the menu button behind the category, and select `New Subcategory` in the popup box.
![](images/2024-10-27/ad8aed7cbdccf83b26f39a6ace7b5a6284057b63de20727c9575ecabd6e06053.png)  

2. Fill in the subcategory name in the popup box and click `Confirm`.
![](images/2024-10-27/fd0ec57b4040d96ae77c5bb7016e420861ea1b26e34a9bce8c28d4e5ee5b600b.png)  

#### Category Sorting
1. Click the sorting button in front of the category, as shown below
![](images/2024-10-27/ec0438456261c5e7f8a21e9a3b1639bbdfea6b8b36658c2b94dec286016c92f3.png)  

2. Drag the category until the sorting is accurate, as shown below
![](images/2024-10-27/38c2cfc514e189c30c1163ff97cd9757a2afa8cb67ca178120b0d096317cfc96.png)  

![](images/2024-10-27/12bc6bdfe9948faa2e94f05e3f7bdfc9ff505e957fff7a8b529bec0e30d92ca2.png)  