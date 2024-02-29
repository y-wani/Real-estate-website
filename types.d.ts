type Location_ll = {
    lat: number,
    long: number,
  };

interface ResultsItem {
    description?: string | undefined;
    list_price?: number;
    beds?: number;
    baths?: number;
    sqft?: number;
    primary_photo?: { href?: string };
    // Add other properties based on the actual API response
 }

 interface Photo {
    href: string;
  }
  
  interface Source {
    office_name: string;
    id: string;
    type: string;
  }
  
  interface Listing {
    primary_photo: Photo;
    last_update_date: string;
    source: Source;
    tags: string[] | null;
    permalink: string;
    list_date?: string;
    open_houses?: any; // You may want to define a type for open_houses
    description: {
        beds: number;
        baths: number;
        sqft: number;
      };
    sqft?: number;
    baths_consolidated?: string;
    lot_sqft?: number | null;
    sold_price?: number | null;
    baths_3qtr?: string | null;
    baths_full?: number;
    name?: string | null;
    sold_date?: string | null;
    sub_type?: string | null;
    year_built?: number | null;
    garage?: number | null;
    baths_half?: number | null;
    baths?: number;
    baths_1qtr?: string | null;
    stories?: number | null;
    beds?: number;
    type?: string | null;
    branding?: any[]; // You may want to define a type for branding
    photos?: Photo[];
    coming_soon_date?: string | null;
    flags?: {
      is_new_construction?: boolean | null;
      is_subdivision?: boolean | null;
      // ... other flag properties
    };
    lead_attributes?: {
      show_contact_an_agent?: boolean;
      lead_type?: string;
      // ... other lead attributes
    };
    opcity_lead_attributes?: {
      flip_the_market_enabled?: boolean;
      cashback_enabled?: boolean;
      ready_connect_mortgage?: boolean;
      // ... other opcity lead attributes
    };
    tax_record?: {
      public_record_id?: string;
      // ... other tax record properties
    };
    list_price?: number | null;
    matterport?: boolean | null;
    property_id?: string;
    search_promotions?: any[]; // You may want to define a type for search promotions
    location?: {
      address?: {
        postal_code?: string;
        state?: string;
        // ... other address properties
      };
      coordinate?: {
        lon?: number;
        lat?: number;
      };
      city?: string;
      state_code?: string;
      line?: string;
      street_view_url?: string;
      county?: {
        fips_code?: string;
        name?: string;
      };
    };
    rent_to_own?: any; // You may want to define a type for rent to own
    products?: string[]; // You may want to define a type for products
  }
  
  interface HomeSearch {
    total: number;
    count: number;
    results: Listing[];
  }
  
  interface ApiResponse {
    data: {
      home_search: HomeSearch;
    };
    status: number;
  }