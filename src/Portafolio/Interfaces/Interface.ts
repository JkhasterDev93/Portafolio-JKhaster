export interface icon_button {
    name: string,
    tooltip: string,
    icon: any,
    url: string;
}

export interface textGeneral {
    name: string;
    text: string;
}

export interface listViewer {
    main:{
        time: string;
        course: string;
        school: string;
    },
    others: listCourses[]
}

export interface listCourses {
    school: string;
    description: string;
    time:string;
    end: 'N' | 'S';
    porcent: string;
    url: string;
}

export interface listStack {
    name: string;
    label: string;
    icon: string;
}


export interface gridBoxExp {
    id: number;    
    bg: string;
    company: string;
    class: string;
    src: string;
    showImage: 'S' | 'N';
}

export interface ExpDetail {
    id: number;
    title: string;
    pagraph: Paragraph[];
    render: Render[];
    stack?: string[];
}

export interface Paragraph {
    title?: string | null;
    subtitle?: string | null;
    text?: string;
    list?: string[];
}

export interface Render {
    id: string;
    src: string;
}