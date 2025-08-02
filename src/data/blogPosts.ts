export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  author: string;
  readTime: string;
  content: {
    sections: Array<{
      type: 'paragraph' | 'heading' | 'image' | 'quote' | 'list';
      content: string | string[];
      level?: number;
      alt?: string;
      src?: string;
    }>;
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: 'gst-compliance-guide',
    title: "Navigating GST Compliance in India: A Comprehensive Guide",
    excerpt: "Understanding the complexities of India's Goods and Services Tax system and how businesses can ensure compliance while optimizing their tax position.",
    date: "May 15, 2025",
    category: "Taxation",
    image: "https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: "Charu Paliwal",
    readTime: "8 min read",
    content: {
      sections: [
        {
          type: 'paragraph',
          content: "India's Goods and Services Tax (GST) system, implemented in 2017, represents one of the most significant tax reforms in the country's history. For businesses operating in India, understanding GST compliance is not just a legal requirement—it's a strategic necessity that can significantly impact your bottom line."
        },
        {
          type: 'heading',
          level: 2,
          content: "Understanding GST Structure"
        },
        {
          type: 'paragraph',
          content: "GST in India operates on a dual structure with Central GST (CGST) and State GST (SGST) for intra-state transactions, and Integrated GST (IGST) for inter-state transactions. This unified system replaced multiple indirect taxes, creating a more streamlined approach to taxation."
        },
        {
          type: 'list',
          content: [
            "CGST: Collected by the Central Government",
            "SGST: Collected by State Governments",
            "IGST: Applied on inter-state transactions",
            "UTGST: For Union Territories"
          ]
        },
        {
          type: 'heading',
          level: 2,
          content: "Key Compliance Requirements"
        },
        {
          type: 'paragraph',
          content: "GST compliance involves several critical components that businesses must manage effectively. Registration is mandatory for businesses with turnover exceeding ₹40 lakhs (₹20 lakhs for northeastern states), though voluntary registration is available for smaller businesses."
        },
        {
          type: 'quote',
          content: "Proper GST compliance isn't just about avoiding penalties—it's about optimizing your tax position and maintaining healthy cash flows."
        },
        {
          type: 'heading',
          level: 3,
          content: "Monthly and Annual Filing Requirements"
        },
        {
          type: 'paragraph',
          content: "Regular filing is crucial for GST compliance. Businesses must file monthly returns (GSTR-1, GSTR-3B) and annual returns (GSTR-9). Each return serves a specific purpose and has strict deadlines that must be adhered to."
        },
        {
          type: 'paragraph',
          content: "Input Tax Credit (ITC) optimization is one of the most significant benefits of GST. Businesses can claim credit for taxes paid on inputs, reducing their overall tax liability. However, proper documentation and compliance with conditions are essential for claiming ITC."
        },
        {
          type: 'heading',
          level: 2,
          content: "Common Compliance Challenges"
        },
        {
          type: 'paragraph',
          content: "Many businesses face challenges in GST compliance, particularly in areas such as invoice management, return filing, and ITC reconciliation. Technology solutions and expert guidance can help overcome these challenges effectively."
        },
        {
          type: 'paragraph',
          content: "At Emproisys, we help businesses navigate these complexities with comprehensive GST advisory services, ensuring compliance while optimizing tax positions for sustainable growth."
        }
      ]
    }
  },
  {
    id: 'legal-structures-foreign-businesses',
    title: "Legal Structures for Foreign Businesses Entering the Indian Market",
    excerpt: "A comparison of different legal entities available to international companies expanding into India, with pros and cons of each approach.",
    date: "April 28, 2025",
    category: "Legal",
    image: "https://images.pexels.com/photos/5668857/pexels-photo-5668857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: "RR Pathak",
    readTime: "12 min read",
    content: {
      sections: [
        {
          type: 'paragraph',
          content: "Choosing the right legal structure is one of the most critical decisions foreign businesses face when entering the Indian market. The structure you select will impact everything from taxation and compliance requirements to operational flexibility and exit strategies."
        },
        {
          type: 'heading',
          level: 2,
          content: "Private Limited Company"
        },
        {
          type: 'paragraph',
          content: "A Private Limited Company is the most popular choice for foreign investors due to its flexibility and limited liability protection. This structure allows for 100% foreign ownership in most sectors and provides a clear framework for operations."
        },
        {
          type: 'list',
          content: [
            "Limited liability protection for shareholders",
            "Separate legal entity status",
            "Easier access to funding and credit",
            "Professional credibility in the market"
          ]
        },
        {
          type: 'heading',
          level: 2,
          content: "Liaison Office"
        },
        {
          type: 'paragraph',
          content: "A Liaison Office serves as a communication channel between the parent company and Indian parties. It cannot engage in commercial activities but is useful for market research and relationship building."
        },
        {
          type: 'quote',
          content: "The choice of legal structure should align with your business objectives, investment capacity, and long-term strategy in India."
        },
        {
          type: 'heading',
          level: 2,
          content: "Branch Office"
        },
        {
          type: 'paragraph',
          content: "Branch Offices can undertake specific activities permitted by RBI guidelines. They're suitable for companies wanting to test the market before making larger investments."
        },
        {
          type: 'heading',
          level: 2,
          content: "Project Office"
        },
        {
          type: 'paragraph',
          content: "Project Offices are established for executing specific projects and have a defined timeline. They're ideal for companies involved in infrastructure or large-scale projects."
        },
        {
          type: 'paragraph',
          content: "Each structure has distinct advantages and limitations. Our legal experts at Emproisys help you evaluate these options based on your specific business needs, ensuring you make an informed decision that supports your long-term success in India."
        }
      ]
    }
  },
  {
    id: 'cross-border-investment-regulations',
    title: "Cross-Border Investment Regulations: Recent Changes and Implications",
    excerpt: "Recent updates to India's foreign direct investment policies and how they impact various sectors and investment strategies.",
    date: "April 10, 2025",
    category: "Finance",
    image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: "Nishchint Paliwal",
    readTime: "10 min read",
    content: {
      sections: [
        {
          type: 'paragraph',
          content: "India's Foreign Direct Investment (FDI) policy landscape continues to evolve, with recent changes aimed at balancing economic growth with national security concerns. Understanding these regulations is crucial for foreign investors looking to enter or expand in the Indian market."
        },
        {
          type: 'heading',
          level: 2,
          content: "Recent Policy Updates"
        },
        {
          type: 'paragraph',
          content: "The government has introduced several amendments to FDI policy, particularly focusing on sectors deemed sensitive from a national security perspective. These changes affect investment routes, approval mechanisms, and compliance requirements."
        },
        {
          type: 'list',
          content: [
            "Enhanced scrutiny for investments from countries sharing land borders",
            "Revised sectoral caps in telecommunications and defense",
            "Streamlined approval processes for certain sectors",
            "New compliance requirements for existing investments"
          ]
        },
        {
          type: 'heading',
          level: 2,
          content: "Sector-Specific Implications"
        },
        {
          type: 'paragraph',
          content: "Different sectors have been impacted differently by these regulatory changes. Technology, telecommunications, and defense sectors face increased scrutiny, while manufacturing and infrastructure continue to see liberalization."
        },
        {
          type: 'quote',
          content: "Successful cross-border investment requires not just understanding current regulations, but anticipating future policy directions."
        },
        {
          type: 'heading',
          level: 2,
          content: "Compliance Strategies"
        },
        {
          type: 'paragraph',
          content: "Investors must develop robust compliance frameworks that address both current requirements and potential future changes. This includes proper documentation, regular compliance audits, and proactive engagement with regulatory authorities."
        },
        {
          type: 'paragraph',
          content: "Our investment advisory team at Emproisys helps clients navigate these complex regulations, ensuring compliance while maximizing investment opportunities in the dynamic Indian market."
        }
      ]
    }
  }
];