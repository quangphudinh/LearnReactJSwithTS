type Props = {
    placeholder?: string,
    value? : string,
    width? : string,
    height? : string;
    onChange? : (value : string) =>  void;
};

const TextField = ({
    width = '100%',
    height = '20px',
    onChange,
    // placeholder,
    // value
    ...props
}: Props) => {
    return(
        <>
            <input 
                className="text-field"
                style={{width , height}}
                // placeholder= {placeholder}
                // value={value}
                {...props}
                onChange={(e) => onChange && onChange(e.target.value)}
             type="text" />
        </>
    )
}

export default TextField;

