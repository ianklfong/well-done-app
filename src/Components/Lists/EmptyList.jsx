import styled from "styled-components"
import { v4 as uuid } from "uuid";


const Container = styled.div`
    width: 100%;
    height: 100%;
    border-style: dashed;
`

export default function EmptyList ({ handleAddList }){

    const handleClick = e => {
        e.preventDefault();
        const id = uuid()
        handleAddList(id);       
    }

    return(
               
        <div 
            className='w-100 h-100 d-flex' 
            style={{padding: '5rem', flexDirection: 'row', cursor: 'pointer'}} 
            onClick={handleClick}
            data-testid="add-list"
        >

            <Container className="row p-5">
                <div className="col d-flex">
                    <h2 
                        className="text-center mx-auto"
                        style={{paddingTop: '8rem', lineHeight: 1.5}}
                    >Ready to plan some <br></br>NEW CHALLENGE? <br></br>+
                    </h2>
                </div>
                <div className="col d-flex">

                    <svg className=" m-auto" width="313" height="379" viewBox="0 0 313 379" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_492_6848)">
                            <path d="M297.213 0.481325H42.2817C33.8281 0.481325 26.9751 7.35025 26.9751 15.8235V216.906C26.9751 225.379 33.8281 232.248 42.2817 232.248H297.213C305.666 232.248 312.519 225.379 312.519 216.906V15.8235C312.519 7.35025 305.666 0.481325 297.213 0.481325Z" fill="white"/>
                            <path d="M297.213 232.73H42.2818C38.0961 232.725 34.083 231.056 31.1232 228.09C28.1635 225.123 26.4987 221.101 26.4941 216.905V15.8244C26.4987 11.6289 28.1635 7.60653 31.1232 4.63986C34.083 1.6732 38.0961 0.00453775 42.2818 0L297.213 0C301.399 0.00465387 305.412 1.67335 308.371 4.63999C311.331 7.60663 312.996 11.6289 313.001 15.8244V216.906C312.996 221.101 311.331 225.123 308.371 228.09C305.412 231.056 301.399 232.725 297.213 232.73ZM42.2818 0.963089C38.3509 0.967627 34.5823 2.53484 31.8028 5.3209C29.0233 8.10696 27.4598 11.8844 27.4554 15.8244V216.906C27.46 220.846 29.0235 224.623 31.803 227.409C34.5825 230.195 38.351 231.762 42.2818 231.766H297.213C301.144 231.762 304.912 230.195 307.692 227.409C310.471 224.623 312.035 220.846 312.039 216.906V15.8244C312.035 11.8843 310.472 8.10686 307.692 5.32077C304.913 2.53468 301.144 0.96751 297.213 0.963089H42.2818Z" fill="#292A2E"/>
                            <path opacity="0.2" d="M290.14 42.1465H274.487C271.188 42.1465 268.513 44.8273 268.513 48.1342V63.8237C268.513 67.1306 271.188 69.8114 274.487 69.8114H290.14C293.439 69.8114 296.114 67.1306 296.114 63.8237V48.1342C296.114 44.8273 293.439 42.1465 290.14 42.1465Z" fill="#6D7ECE"/>
                            <path opacity="0.2" d="M290.626 77.0907H275.093C271.761 77.0907 269.059 79.7984 269.059 83.1386V98.7076C269.059 102.048 271.761 104.756 275.093 104.756H290.626C293.958 104.756 296.66 102.048 296.66 98.7076V83.1386C296.66 79.7984 293.958 77.0907 290.626 77.0907Z" fill="#6D7ECE"/>
                            <path opacity="0.2" d="M290.626 116.01H275.093C271.761 116.01 269.059 118.718 269.059 122.058V137.627C269.059 140.967 271.761 143.675 275.093 143.675H290.626C293.958 143.675 296.66 140.967 296.66 137.627V122.058C296.66 118.718 293.958 116.01 290.626 116.01Z" fill="#6D7ECE"/>
                            <path opacity="0.2" d="M290.08 152.938H274.547C271.215 152.938 268.513 155.646 268.513 158.986V174.555C268.513 177.895 271.215 180.603 274.547 180.603H290.08C293.413 180.603 296.114 177.895 296.114 174.555V158.986C296.114 155.646 293.413 152.938 290.08 152.938Z" fill="#6D7ECE"/>
                            <g opacity="0.15">
                                <path opacity="0.15" d="M177.591 42.1465H161.938C158.639 42.1465 155.964 44.8273 155.964 48.1342V63.8237C155.964 67.1306 158.639 69.8114 161.938 69.8114H177.591C180.891 69.8114 183.565 67.1306 183.565 63.8237V48.1342C183.565 44.8273 180.891 42.1465 177.591 42.1465Z" fill="#6D7ECE"/>
                                <path opacity="0.15" d="M140.075 42.1465H124.422C121.123 42.1465 118.448 44.8273 118.448 48.1342V63.8237C118.448 67.1306 121.123 69.8114 124.422 69.8114H140.075C143.374 69.8114 146.049 67.1306 146.049 63.8237V48.1342C146.049 44.8273 143.374 42.1465 140.075 42.1465Z" fill="#6D7ECE"/>
                                <path opacity="0.15" d="M103.105 42.1465H87.4519C84.1526 42.1465 81.478 44.8273 81.478 48.1342V63.8237C81.478 67.1306 84.1526 69.8114 87.4519 69.8114H103.105C106.404 69.8114 109.079 67.1306 109.079 63.8237V48.1342C109.079 44.8273 106.404 42.1465 103.105 42.1465Z" fill="#6D7ECE"/>
                                <path opacity="0.15" d="M65.5884 42.1465H49.9353C46.636 42.1465 43.9614 44.8273 43.9614 48.1342V63.8237C43.9614 67.1306 46.636 69.8114 49.9353 69.8114H65.5884C68.8876 69.8114 71.5622 67.1306 71.5622 63.8237V48.1342C71.5622 44.8273 68.8876 42.1465 65.5884 42.1465Z" fill="#6D7ECE"/>
                                <path opacity="0.15" d="M215.107 42.1465H199.454C196.155 42.1465 193.48 44.8273 193.48 48.1342V63.8237C193.48 67.1306 196.155 69.8114 199.454 69.8114H215.107C218.407 69.8114 221.081 67.1306 221.081 63.8237V48.1342C221.081 44.8273 218.407 42.1465 215.107 42.1465Z" fill="#6D7ECE"/>
                                <path opacity="0.15" d="M252.624 42.1465H236.971C233.672 42.1465 230.997 44.8273 230.997 48.1342V63.8237C230.997 67.1306 233.672 69.8114 236.971 69.8114H252.624C255.923 69.8114 258.598 67.1306 258.598 63.8237V48.1342C258.598 44.8273 255.923 42.1465 252.624 42.1465Z" fill="#6D7ECE"/>
                                <path opacity="0.15" d="M178.077 77.0907H162.544C159.212 77.0907 156.51 79.7984 156.51 83.1386V98.7076C156.51 102.048 159.212 104.756 162.544 104.756H178.077C181.41 104.756 184.111 102.048 184.111 98.7076V83.1386C184.111 79.7984 181.41 77.0907 178.077 77.0907Z" fill="#6D7ECE"/>
                                <path opacity="0.15" d="M215.593 77.0907H200.06C196.728 77.0907 194.026 79.7984 194.026 83.1386V98.7076C194.026 102.048 196.728 104.756 200.06 104.756H215.593C218.926 104.756 221.627 102.048 221.627 98.7076V83.1386C221.627 79.7984 218.926 77.0907 215.593 77.0907Z" fill="#6D7ECE"/>
                                <path opacity="0.15" d="M253.11 77.0907H237.577C234.244 77.0907 231.543 79.7984 231.543 83.1386V98.7076C231.543 102.048 234.244 104.756 237.577 104.756H253.11C256.442 104.756 259.144 102.048 259.144 98.7076V83.1386C259.144 79.7984 256.442 77.0907 253.11 77.0907Z" fill="#6D7ECE"/>
                                <path opacity="0.15" d="M65.5283 77.0907H49.9954C46.6629 77.0907 43.9614 79.7984 43.9614 83.1386V98.7076C43.9614 102.048 46.6629 104.756 49.9954 104.756H65.5283C68.8607 104.756 71.5622 102.048 71.5622 98.7076V83.1386C71.5622 79.7984 68.8607 77.0907 65.5283 77.0907Z" fill="#6D7ECE"/>
                                <path opacity="0.15" d="M103.045 77.0907H87.512C84.1795 77.0907 81.478 79.7984 81.478 83.1386V98.7076C81.478 102.048 84.1795 104.756 87.512 104.756H103.045C106.377 104.756 109.079 102.048 109.079 98.7076V83.1386C109.079 79.7984 106.377 77.0907 103.045 77.0907Z" fill="#6D7ECE"/>
                                <path opacity="0.15" d="M140.561 77.0907H125.028C121.695 77.0907 118.994 79.7984 118.994 83.1386V98.7076C118.994 102.048 121.695 104.756 125.028 104.756H140.561C143.893 104.756 146.594 102.048 146.594 98.7076V83.1386C146.594 79.7984 143.893 77.0907 140.561 77.0907Z" fill="#6D7ECE"/>
                                <path opacity="0.15" d="M178.077 116.01H162.544C159.212 116.01 156.51 118.718 156.51 122.058V137.627C156.51 140.967 159.212 143.675 162.544 143.675H178.077C181.41 143.675 184.111 140.967 184.111 137.627V122.058C184.111 118.718 181.41 116.01 178.077 116.01Z" fill="#6D7ECE"/>
                                <path opacity="0.15" d="M215.593 116.01H200.06C196.728 116.01 194.026 118.718 194.026 122.058V137.627C194.026 140.967 196.728 143.675 200.06 143.675H215.593C218.926 143.675 221.627 140.967 221.627 137.627V122.058C221.627 118.718 218.926 116.01 215.593 116.01Z" fill="#6D7ECE"/>
                                <path opacity="0.15" d="M253.11 116.01H237.577C234.244 116.01 231.543 118.718 231.543 122.058V137.627C231.543 140.967 234.244 143.675 237.577 143.675H253.11C256.442 143.675 259.144 140.967 259.144 137.627V122.058C259.144 118.718 256.442 116.01 253.11 116.01Z" fill="#6D7ECE"/>
                                <path opacity="0.15" d="M65.5283 116.01H49.9954C46.6629 116.01 43.9614 118.718 43.9614 122.058V137.627C43.9614 140.967 46.6629 143.675 49.9954 143.675H65.5283C68.8607 143.675 71.5622 140.967 71.5622 137.627V122.058C71.5622 118.718 68.8607 116.01 65.5283 116.01Z" fill="#6D7ECE"/>
                                <path opacity="0.15" d="M103.045 116.01H87.512C84.1795 116.01 81.478 118.718 81.478 122.058V137.627C81.478 140.967 84.1795 143.675 87.512 143.675H103.045C106.377 143.675 109.079 140.967 109.079 137.627V122.058C109.079 118.718 106.377 116.01 103.045 116.01Z" fill="#6D7ECE"/>
                                <path opacity="0.15" d="M140.561 116.01H125.028C121.695 116.01 118.994 118.718 118.994 122.058V137.627C118.994 140.967 121.695 143.675 125.028 143.675H140.561C143.893 143.675 146.594 140.967 146.594 137.627V122.058C146.594 118.718 143.893 116.01 140.561 116.01Z" fill="#6D7ECE"/>
                                <path opacity="0.15" d="M178.077 153.485H162.544C159.212 153.485 156.51 156.192 156.51 159.533V175.102C156.51 178.442 159.212 181.15 162.544 181.15H178.077C181.41 181.15 184.111 178.442 184.111 175.102V159.533C184.111 156.192 181.41 153.485 178.077 153.485Z" fill="#6D7ECE"/>
                                <path opacity="0.15" d="M215.047 152.938H199.514C196.182 152.938 193.48 155.646 193.48 158.986V174.555C193.48 177.895 196.182 180.603 199.514 180.603H215.047C218.38 180.603 221.081 177.895 221.081 174.555V158.986C221.081 155.646 218.38 152.938 215.047 152.938Z" fill="#6D7ECE"/>
                                <path opacity="0.15" d="M252.564 152.938H237.031C233.699 152.938 230.997 155.646 230.997 158.986V174.555C230.997 177.895 233.699 180.603 237.031 180.603H252.564C255.896 180.603 258.598 177.895 258.598 174.555V158.986C258.598 155.646 255.896 152.938 252.564 152.938Z" fill="#6D7ECE"/>
                                <path opacity="0.15" d="M65.5283 153.485H49.9954C46.6629 153.485 43.9614 156.192 43.9614 159.533V175.102C43.9614 178.442 46.6629 181.15 49.9954 181.15H65.5283C68.8607 181.15 71.5622 178.442 71.5622 175.102V159.533C71.5622 156.192 68.8607 153.485 65.5283 153.485Z" fill="#6D7ECE"/>
                                <path opacity="0.15" d="M103.045 153.485H87.512C84.1795 153.485 81.478 156.192 81.478 159.533V175.102C81.478 178.442 84.1795 181.15 87.512 181.15H103.045C106.377 181.15 109.079 178.442 109.079 175.102V159.533C109.079 156.192 106.377 153.485 103.045 153.485Z" fill="#6D7ECE"/>
                                <path opacity="0.15" d="M140.561 153.485H125.028C121.695 153.485 118.994 156.192 118.994 159.533V175.102C118.994 178.442 121.695 181.15 125.028 181.15H140.561C143.893 181.15 146.594 178.442 146.594 175.102V159.533C146.594 156.192 143.893 153.485 140.561 153.485Z" fill="#6D7ECE"/>
                                <path opacity="0.15" d="M177.531 187.428H161.998C158.666 187.428 155.964 190.136 155.964 193.476V209.045C155.964 212.386 158.666 215.093 161.998 215.093H177.531C180.864 215.093 183.565 212.386 183.565 209.045V193.476C183.565 190.136 180.864 187.428 177.531 187.428Z" fill="#6D7ECE"/>
                                <path opacity="0.15" d="M64.9824 187.428H49.4495C46.117 187.428 43.4155 190.136 43.4155 193.476V209.045C43.4155 212.386 46.117 215.093 49.4495 215.093H64.9824C68.3148 215.093 71.0163 212.386 71.0163 209.045V193.476C71.0163 190.136 68.3148 187.428 64.9824 187.428Z" fill="#6D7ECE"/>
                                <path opacity="0.15" d="M102.498 187.428H86.9656C83.6331 187.428 80.9316 190.136 80.9316 193.476V209.045C80.9316 212.386 83.6331 215.093 86.9656 215.093H102.498C105.831 215.093 108.532 212.386 108.532 209.045V193.476C108.532 190.136 105.831 187.428 102.498 187.428Z" fill="#6D7ECE"/>
                                <path opacity="0.15" d="M140.015 187.428H124.482C121.15 187.428 118.448 190.136 118.448 193.476V209.045C118.448 212.386 121.15 215.093 124.482 215.093H140.015C143.348 215.093 146.049 212.386 146.049 209.045V193.476C146.049 190.136 143.348 187.428 140.015 187.428Z" fill="#6D7ECE"/>
                            </g>
                            <path d="M312.52 15.8244V25.6605H26.9766V15.8244C26.976 13.8094 27.3714 11.8141 28.1403 9.95234C28.9093 8.09059 30.0365 6.39891 31.4578 4.97391C32.8791 3.54892 34.5665 2.41853 36.4238 1.6473C38.281 0.876075 40.2716 0.479127 42.2818 0.479127H297.213C299.224 0.479358 301.214 0.876458 303.071 1.64775C304.929 2.41905 306.616 3.54944 308.037 4.97437C309.459 6.39931 310.586 8.0909 311.355 9.95254C312.124 11.8142 312.52 13.8094 312.52 15.8244Z" fill="#292A2E"/>
                            <path d="M139.667 190.489H124.83C122.992 190.489 121.501 191.982 121.501 193.825V208.696C121.501 210.539 122.992 212.033 124.83 212.033H139.667C141.506 212.033 142.996 210.539 142.996 208.696V193.825C142.996 191.982 141.506 190.489 139.667 190.489Z" fill="white"/>
                            <path d="M63.9025 145.031L45.5853 141.709C45.0661 141.615 44.6056 141.318 44.3049 140.883C44.0042 140.449 43.8881 139.912 43.982 139.392L46.8146 123.703L52.4525 119.94L67.9258 122.748C68.4449 122.842 68.9055 123.139 69.2062 123.573C69.5069 124.008 69.623 124.544 69.5291 125.064L66.2141 143.424C66.1677 143.682 66.071 143.928 65.9297 144.148C65.7884 144.368 65.6051 144.559 65.3905 144.708C65.1758 144.857 64.9339 144.962 64.6786 145.018C64.4233 145.073 64.1596 145.078 63.9025 145.031Z" fill="#6D7ECE"/>
                            <path opacity="0.29" d="M52.4524 119.94L46.8145 123.703L51.6293 124.66L52.4524 119.94Z" fill="#FFFFFA"/>
                            <g opacity="0.88">
                            <path opacity="0.88" d="M65.3342 134.327C65.3157 134.327 65.2972 134.326 65.279 134.322L48.1388 131.145C48.0664 131.132 48.0023 131.09 47.9605 131.029C47.9188 130.968 47.9029 130.893 47.9162 130.821C47.9296 130.748 47.9712 130.684 48.0319 130.642C48.0925 130.6 48.1673 130.584 48.2397 130.598L65.3798 133.775C65.4472 133.788 65.5076 133.825 65.5493 133.879C65.5909 133.934 65.611 134.002 65.6055 134.071C65.6001 134.139 65.5695 134.203 65.5198 134.25C65.47 134.298 65.4045 134.325 65.336 134.327H65.3342Z" fill="white"/>
                            <path opacity="0.88" d="M64.7202 137.93C64.7016 137.93 64.6829 137.929 64.6645 137.926L47.5248 134.749C47.4878 134.743 47.4522 134.73 47.4202 134.711C47.3883 134.691 47.3605 134.666 47.3387 134.635C47.3169 134.605 47.3015 134.57 47.2933 134.533C47.2852 134.497 47.2844 134.459 47.2912 134.422C47.298 134.385 47.3122 134.35 47.3328 134.319C47.3535 134.288 47.3802 134.261 47.4115 134.24C47.4427 134.219 47.4778 134.205 47.5146 134.199C47.5514 134.192 47.5892 134.193 47.6257 134.201L64.7654 137.378C64.8333 137.39 64.8942 137.427 64.9363 137.482C64.9784 137.537 64.9987 137.605 64.9932 137.674C64.9877 137.743 64.9569 137.807 64.9067 137.855C64.8565 137.902 64.7905 137.929 64.7215 137.93H64.7202Z" fill="white"/>
                            <path opacity="0.88" d="M54.6637 139.396C54.6452 139.397 54.6266 139.395 54.6084 139.392L47.0058 137.982C46.9687 137.977 46.9332 137.964 46.9012 137.945C46.8692 137.925 46.8415 137.9 46.8197 137.869C46.7979 137.839 46.7824 137.804 46.7743 137.767C46.7661 137.731 46.7654 137.693 46.7722 137.656C46.779 137.619 46.7931 137.584 46.8138 137.553C46.8345 137.521 46.8612 137.495 46.8924 137.474C46.9237 137.453 46.9587 137.439 46.9955 137.432C47.0323 137.426 47.0701 137.426 47.1066 137.435L54.7093 138.844C54.7767 138.857 54.837 138.894 54.8787 138.949C54.9204 139.003 54.9404 139.072 54.935 139.14C54.9295 139.209 54.899 139.273 54.8492 139.32C54.7994 139.367 54.734 139.394 54.6654 139.396H54.6637Z" fill="white"/>
                            </g>
                            <path d="M65.4158 131.398C65.348 131.398 65.2804 131.392 65.2137 131.38L61.5049 130.702C61.3586 130.675 61.219 130.62 61.0942 130.539C60.9693 130.458 60.8616 130.353 60.7774 130.23C60.6931 130.107 60.6338 129.969 60.6031 129.823C60.5723 129.678 60.5705 129.527 60.598 129.381L61.2212 125.433C61.2752 125.14 61.4418 124.881 61.6851 124.71C61.9284 124.539 62.2289 124.471 62.5219 124.52L66.2421 125.158C66.3896 125.183 66.5308 125.237 66.6572 125.317C66.7837 125.397 66.893 125.502 66.9787 125.625C67.0644 125.748 67.1249 125.887 67.1565 126.033C67.1881 126.18 67.1904 126.331 67.163 126.479L66.5284 130.47C66.4799 130.73 66.3422 130.965 66.1391 131.135C65.9359 131.304 65.6801 131.398 65.4158 131.398ZM62.3329 124.944C62.1718 124.944 62.016 125.001 61.892 125.104C61.768 125.207 61.6835 125.349 61.6531 125.508L61.0299 129.455C61.0124 129.545 61.0128 129.638 61.0312 129.728C61.0496 129.818 61.0856 129.903 61.1371 129.979C61.1886 130.054 61.2547 130.119 61.3313 130.169C61.408 130.219 61.4938 130.253 61.5838 130.27L65.2926 130.948C65.4719 130.979 65.6565 130.939 65.8065 130.836C65.9565 130.732 66.06 130.574 66.0947 130.395L66.7302 126.401C66.7471 126.31 66.7459 126.218 66.7267 126.128C66.7075 126.038 66.6707 125.953 66.6183 125.878C66.566 125.802 66.4992 125.738 66.4219 125.689C66.3446 125.639 66.2583 125.606 66.1679 125.591L62.4478 124.953C62.4098 124.947 62.3714 124.944 62.3329 124.944Z" fill="white"/>
                            <path d="M127.837 208.372C127.798 208.372 127.759 208.372 127.72 208.366C127.541 208.35 127.368 208.297 127.211 208.21C127.055 208.123 126.918 208.004 126.809 207.861L122.913 202.724C122.705 202.451 122.615 202.106 122.661 201.766C122.707 201.426 122.887 201.119 123.159 200.911C123.432 200.703 123.775 200.613 124.114 200.659C124.454 200.706 124.76 200.885 124.968 201.158L128.009 205.168L139.683 194.487C139.809 194.372 139.955 194.284 140.115 194.226C140.274 194.168 140.443 194.142 140.612 194.15C140.782 194.158 140.948 194.199 141.101 194.271C141.255 194.343 141.393 194.445 141.507 194.57C141.621 194.696 141.71 194.843 141.767 195.002C141.825 195.162 141.851 195.332 141.843 195.502C141.835 195.671 141.794 195.838 141.722 195.992C141.65 196.145 141.549 196.284 141.424 196.398L128.706 208.032C128.468 208.25 128.158 208.371 127.837 208.372Z" fill="#6D7ECE"/>
                            <path d="M297.552 60.1603L282.111 70.582C281.894 70.7286 281.651 70.831 281.395 70.8832C281.139 70.9354 280.875 70.9365 280.618 70.8863C280.361 70.8361 280.117 70.7357 279.899 70.5908C279.681 70.4459 279.494 70.2593 279.348 70.0418L270.463 56.8179L271.886 50.1804L284.931 41.3763C285.148 41.2299 285.391 41.1277 285.647 41.0756C285.904 41.0235 286.168 41.0224 286.424 41.0726C286.681 41.1228 286.925 41.2231 287.143 41.368C287.361 41.5128 287.548 41.6992 287.694 41.9166L298.091 57.3924C298.237 57.6096 298.339 57.8536 298.391 58.1103C298.443 58.367 298.444 58.6314 298.394 58.8885C298.343 59.1455 298.243 59.3901 298.099 59.6084C297.954 59.8266 297.768 60.0142 297.552 60.1603Z" fill="#6D7ECE"/>
                            <path opacity="0.29" d="M271.888 50.18L270.465 56.8179L274.581 54.1383L271.888 50.18Z" fill="#FFFFFA"/>
                            <g opacity="0.88">
                            <path opacity="0.88" d="M291.13 51.4868C291.117 51.5001 291.102 51.512 291.086 51.5224L276.592 61.2254C276.53 61.2619 276.457 61.2735 276.388 61.2576C276.318 61.2418 276.258 61.1998 276.218 61.1404C276.179 61.0809 276.164 61.0085 276.176 60.9382C276.188 60.8679 276.227 60.805 276.285 60.7625L290.78 51.0595C290.837 51.0217 290.906 51.0065 290.974 51.0168C291.042 51.027 291.103 51.062 291.147 51.1151C291.19 51.1681 291.213 51.2354 291.21 51.3041C291.207 51.3727 291.179 51.4378 291.131 51.4868H291.13Z" fill="white"/>
                            <path opacity="0.88" d="M293.197 54.4992C293.183 54.5125 293.169 54.5244 293.153 54.5348L278.657 64.2378C278.596 64.2743 278.523 64.2858 278.454 64.27C278.384 64.2542 278.324 64.2122 278.284 64.1527C278.245 64.0932 278.23 64.0209 278.242 63.9505C278.254 63.8802 278.293 63.8173 278.35 63.7749L292.846 54.0719C292.903 54.0341 292.972 54.0189 293.04 54.0291C293.108 54.0394 293.169 54.0744 293.213 54.1274C293.256 54.1805 293.279 54.2478 293.276 54.3164C293.273 54.385 293.245 54.4501 293.197 54.4992Z" fill="white"/>
                            <path opacity="0.88" d="M287.009 62.5788C286.996 62.5921 286.981 62.6041 286.965 62.6144L280.538 66.9182C280.508 66.9406 280.474 66.9566 280.437 66.9653C280.4 66.9739 280.362 66.975 280.325 66.9685C280.288 66.962 280.253 66.948 280.221 66.9273C280.19 66.9067 280.163 66.8799 280.142 66.8485C280.121 66.8171 280.107 66.7818 280.1 66.7447C280.093 66.7076 280.094 66.6695 280.103 66.6328C280.111 66.596 280.127 66.5613 280.149 66.5308C280.171 66.5003 280.199 66.4747 280.231 66.4554L286.661 62.1516C286.718 62.1138 286.787 62.0985 286.855 62.1088C286.923 62.119 286.984 62.1541 287.028 62.2071C287.071 62.2601 287.094 62.3274 287.091 62.3961C287.088 62.4647 287.06 62.5298 287.012 62.5788H287.009Z" fill="white"/>
                            </g>
                            <path d="M301.088 379H15.8485C15.7671 379 15.689 378.968 15.6314 378.91C15.5738 378.852 15.5415 378.774 15.5415 378.692C15.5415 378.611 15.5738 378.532 15.6314 378.475C15.689 378.417 15.7671 378.385 15.8485 378.385H301.088C301.169 378.385 301.247 378.417 301.305 378.475C301.362 378.532 301.395 378.611 301.395 378.692C301.395 378.774 301.362 378.852 301.305 378.91C301.247 378.968 301.169 379 301.088 379Z" fill="#292A2E"/>
                            <path d="M249.121 359.584C249.121 359.584 247.14 369.87 237.53 370.445C227.92 371.02 230.004 378.691 230.004 378.691H266.728V360.301L249.121 359.584Z" fill="#6D7ECE"/>
                            <path d="M260.448 171.92C260.448 171.92 260.332 168.827 260.357 175.842C260.448 202.009 261.778 231.898 262.885 249.388C264.664 277.505 268.347 366.149 268.347 366.149L242.462 365.946L220.829 170.857L260.448 171.92Z" fill="#262626"/>
                            <path d="M232.681 203.12C232.681 203.12 231.681 222.11 231.497 226.568C231.068 236.878 230.684 247.619 230.684 259.722L227.115 227.927C227.115 227.927 229.898 217.984 232.681 203.12Z" fill="#0A0A0A"/>
                            <path d="M201.776 359.584C201.776 359.584 199.796 369.87 190.186 370.445C180.576 371.02 182.66 378.691 182.66 378.691H219.383V360.301L201.776 359.584Z" fill="#6D7ECE"/>
                            <path d="M194.475 173.952C194.475 173.952 191.899 264.263 192.213 268.634L195.924 365.471L222.289 365.91L224.361 264.223C224.361 264.223 224.677 236.172 231.439 210.124C234.898 196.755 236.98 183.067 237.652 169.272L194.475 173.952Z" fill="#262626"/>
                            <path d="M260.709 171.917L260.788 171.921C260.788 171.921 260.731 170.396 260.709 171.917Z" fill="#333333"/>
                            <path d="M210.609 94.9854C210.687 94.9753 211.555 109.414 228.29 108.155C239.875 107.285 244.008 94.9647 244.271 94.9647C243.022 94.701 240.919 94.312 240.364 94.0153C238.539 93.0328 235.941 92.0104 235.353 88.4596C235.014 86.413 235.589 75.943 235.412 73.8722L217.97 77.8507C218.219 82.2239 219.958 92.3621 213.862 94.1586C212.849 94.4531 211.756 94.7265 210.609 94.9854Z" fill="#FAA896"/>
                            <path d="M218.461 84.6714C225.484 85.2147 234.5 82.2279 236.197 72.8343L237.729 64.3586C239.426 54.9655 235.88 46.4573 227.056 44.8555C218.232 43.2533 210.26 49.671 208.564 59.064L207.886 62.8162C207.675 64.1086 207.553 65.4139 207.519 66.723C207.406 70.1824 207.247 75.444 208.954 79.3087C210.566 82.9575 213.974 84.3246 218.461 84.6714Z" fill="#FAA896"/>
                            <path d="M234.211 44.3742C231.423 43.5026 228.531 43.0094 225.613 42.9078C225.517 42.3968 225.299 41.9166 224.979 41.5079C224.658 41.0993 224.244 40.7743 223.771 40.5605C222.228 39.9566 220.343 40.9293 219.089 42.8045C218.435 41.6832 217.411 40.8252 216.195 40.3777C212.74 39.2998 212.569 44.2735 212.569 44.2735C212.569 44.2735 207.092 38.8563 206.921 45.7654C206.714 54.1251 208.246 56.5788 209.364 57.1941C211.572 58.4166 213.217 58.2095 214.091 60.0074C216.737 65.4527 214.143 80.7909 217.204 82.7114C221.897 85.6534 231.504 85.755 234.625 85.5317C235.825 85.4437 236.949 84.0508 237.454 82.9567C239.086 79.423 242.727 71.4123 243.74 68.0993C245.613 61.988 245.473 48.06 234.211 44.3742Z" fill="#0C0C0C"/>
                            <path d="M215.111 77.234C217.82 76.9394 219.702 73.7952 219.409 71.08C219.115 68.3648 216.756 67.1059 214.047 67.4009L212.848 69.3723L212.783 77.488L215.111 77.234Z" fill="#FAA896"/>
                            <path d="M191.078 124.309C191.576 130.17 193.997 166.731 194.475 173.95H260.421C260.793 167.439 262.466 138.971 263.879 126.24C265.227 114.091 267.873 108.009 265.933 104.417C262.764 98.5472 254.105 95.1555 248.201 94.3542C244.595 93.8649 239.172 93.5142 239.172 93.5142H213.78C211.368 93.5142 197.306 94.6518 194.198 97.0509C188.763 101.248 190.023 111.892 191.078 124.309Z" fill="#B1B1B1"/>
                            <path d="M190.168 116.969C190.112 116.969 190.058 116.947 190.017 116.909C189.976 116.87 189.951 116.817 189.948 116.761L189.416 107.455C189.413 107.397 189.433 107.34 189.472 107.297C189.51 107.253 189.564 107.227 189.623 107.223C189.68 107.221 189.737 107.241 189.78 107.279C189.824 107.318 189.85 107.372 189.854 107.43L190.386 116.736C190.388 116.765 190.384 116.794 190.374 116.821C190.365 116.848 190.35 116.873 190.331 116.895C190.312 116.917 190.288 116.934 190.262 116.947C190.236 116.959 190.208 116.966 190.179 116.968L190.168 116.969Z" fill="#0C0C0C"/>
                            <path d="M274.677 173.568C276.617 173.568 278.528 173.098 280.247 172.198C281.966 171.299 283.444 169.996 284.553 168.401C285.662 166.806 286.37 164.966 286.617 163.038C286.864 161.11 286.643 159.15 285.972 157.326C285.291 155.475 269.319 113.081 266.279 105.226L243.764 114.369C245.474 118.786 251.668 135.526 256.644 149.012L248.377 148.111L245.774 172.105L273.375 173.497C273.807 173.544 274.242 173.568 274.677 173.568Z" fill="#B1B1B1"/>
                            <path d="M261.828 126.488L260.208 173.946L260.646 173.961L262.267 126.503L261.828 126.488Z" fill="#0C0C0C"/>
                            <path d="M142.883 75.8691L122.918 84.6956C122.486 84.8866 121.995 84.8977 121.555 84.7264C121.114 84.5551 120.759 84.2155 120.569 83.7822L113.174 66.9771L116.06 59.9195L132.639 52.5897C132.853 52.4951 133.084 52.4436 133.318 52.4383C133.552 52.433 133.784 52.4739 134.002 52.5587C134.22 52.6436 134.42 52.7706 134.589 52.9327C134.758 53.0947 134.894 53.2885 134.988 53.5031L143.794 73.5148C143.985 73.9481 143.996 74.4396 143.825 74.8811C143.654 75.3226 143.315 75.678 142.883 75.8691Z" fill="#6D7ECE"/>
                            <path opacity="0.29" d="M116.06 59.9203L113.174 66.978L118.256 64.8325L116.06 59.9203Z" fill="#FFFFFA"/>
                            <g opacity="0.88">
                            <path opacity="0.88" d="M135.564 61.785C135.547 61.7971 135.528 61.8074 135.509 61.8157L117.561 69.6682C117.487 69.6939 117.406 69.6907 117.334 69.6592C117.262 69.6277 117.204 69.5702 117.173 69.4981C117.141 69.426 117.138 69.3447 117.164 69.2703C117.189 69.1959 117.242 69.134 117.311 69.0967L135.259 61.2443C135.33 61.2139 135.41 61.2108 135.483 61.2356C135.555 61.2604 135.617 61.3113 135.654 61.3786C135.692 61.4458 135.704 61.5247 135.687 61.6001C135.67 61.6754 135.626 61.7419 135.564 61.7867V61.785Z" fill="white"/>
                            <path opacity="0.88" d="M137.081 65.1877C137.064 65.1998 137.046 65.2101 137.027 65.2184L119.078 73.0708C119.004 73.0979 118.922 73.0956 118.849 73.0643C118.776 73.033 118.718 72.9751 118.686 72.9024C118.655 72.8296 118.652 72.7475 118.678 72.6726C118.705 72.5978 118.758 72.5358 118.829 72.4994L136.777 64.647C136.848 64.6153 136.928 64.6114 137.002 64.6359C137.075 64.6603 137.137 64.7115 137.175 64.7793C137.213 64.8472 137.225 64.9268 137.207 65.0026C137.19 65.0785 137.145 65.1451 137.081 65.1894V65.1877Z" fill="white"/>
                            <path opacity="0.88" d="M138.771 68.9279C138.754 68.94 138.735 68.9503 138.716 68.9587L120.768 76.8111C120.693 76.8382 120.611 76.8359 120.539 76.8046C120.466 76.7733 120.408 76.7154 120.376 76.6427C120.344 76.5699 120.341 76.4877 120.368 76.4129C120.394 76.338 120.448 76.2761 120.518 76.2397L138.466 68.3872C138.537 68.3556 138.617 68.3516 138.691 68.3761C138.765 68.4006 138.827 68.4517 138.865 68.5196C138.903 68.5874 138.914 68.667 138.897 68.7429C138.88 68.8187 138.834 68.8853 138.771 68.9297V68.9279Z" fill="white"/>
                            <path opacity="0.88" d="M130.332 76.6348C130.314 76.6468 130.296 76.6571 130.277 76.6656L122.316 80.1483C122.242 80.174 122.16 80.1708 122.089 80.1393C122.017 80.1078 121.959 80.0503 121.928 79.9782C121.896 79.9061 121.893 79.8248 121.918 79.7504C121.944 79.6761 121.997 79.6141 122.066 79.5768L130.027 76.0942C130.098 76.0638 130.177 76.0607 130.25 76.0854C130.323 76.1102 130.385 76.1612 130.422 76.2284C130.46 76.2957 130.472 76.3746 130.455 76.4499C130.438 76.5253 130.394 76.5917 130.332 76.6366V76.6348Z" fill="white"/>
                            </g>
                            <path d="M126.381 74.3355C126.29 74.0933 126.151 73.8722 125.972 73.6858C125.793 73.4994 125.578 73.3515 125.34 73.2512C125.102 73.1508 124.846 73.1002 124.588 73.1023C124.329 73.1044 124.074 73.1592 123.838 73.2634C123.388 73.4809 123.037 73.8616 122.856 74.3285C122.675 74.7955 122.677 75.3138 122.863 75.779L123.495 78.4032C123.628 78.9583 123.555 79.5432 123.288 80.0476C123.021 80.5521 122.579 80.9411 122.045 81.1413C121.522 81.3376 120.946 81.3394 120.422 81.1462C119.898 80.953 119.46 80.5777 119.189 80.0885C119.189 80.0885 115.251 71.7512 115.177 71.4119C114.531 72.0436 113.404 73.5974 113.173 74.7689C113.165 74.775 114.313 84.1316 114.955 84.791L121.617 95.09C124.34 97.887 133.482 93.2333 133.482 93.2333L126.381 74.3355Z" fill="#FAA896"/>
                            <path d="M153.755 151.236C151.524 151.236 149.331 150.658 147.389 149.557C145.447 148.457 143.822 146.872 142.672 144.956L113.994 97.2065L136.162 83.8318L157.961 120.133L194.199 97.0562L209.553 117.689L160.757 149.176C158.668 150.522 156.238 151.237 153.755 151.236Z" fill="#B1B1B1"/>
                            <path d="M191.445 129.578C191.396 129.578 191.349 129.562 191.31 129.531C191.271 129.501 191.244 129.458 191.232 129.411C191.221 129.363 191.225 129.312 191.246 129.268C191.266 129.223 191.301 129.186 191.345 129.163L197.606 125.925C197.658 125.898 197.718 125.893 197.773 125.911C197.829 125.928 197.875 125.967 197.902 126.019C197.928 126.071 197.933 126.131 197.916 126.187C197.898 126.242 197.859 126.289 197.807 126.315L191.546 129.554C191.515 129.57 191.48 129.578 191.445 129.578Z" fill="#0C0C0C"/>
                            <path d="M210.283 94.8856L213.392 90.0148C213.528 89.8013 213.716 89.6257 213.937 89.504C214.159 89.3823 214.408 89.3185 214.66 89.3185H238.093C238.304 89.3185 238.513 89.363 238.705 89.4491C238.898 89.5352 239.071 89.661 239.212 89.8183L243.764 94.8856H210.283Z" fill="#6D7ECE"/>
                            <path d="M29.287 289.973L28.5298 290.057L37.8789 375.69L38.6361 375.607L29.287 289.973Z" fill="#292A2E"/>
                            <path d="M53.5012 327.358L48.9019 372.965L49.6598 373.042L54.2591 327.435L53.5012 327.358Z" fill="#292A2E"/>
                            <path d="M61.4104 367.452H27.2827V378.553H61.4104V367.452Z" fill="#292A2E"/>
                            <path opacity="0.2" d="M61.4104 367.452H27.2827V378.553H61.4104V367.452Z" fill="white"/>
                            <path d="M81.9846 347.011C88.4497 338.399 85.3677 325.14 75.1009 317.398C64.8341 309.655 51.2702 310.36 44.8052 318.972C38.3401 327.585 41.422 340.843 51.6888 348.586C61.9557 356.329 75.5196 355.624 81.9846 347.011Z" fill="#6D7ECE"/>
                            <path opacity="0.2" d="M81.9846 347.011C88.4497 338.399 85.3677 325.14 75.1009 317.398C64.8341 309.655 51.2702 310.36 44.8052 318.972C38.3401 327.585 41.422 340.843 51.6888 348.586C61.9557 356.329 75.5196 355.624 81.9846 347.011Z" fill="white"/>
                            <path opacity="0.5" d="M81.9831 347.013C81.549 347.594 81.0752 348.144 80.5653 348.659C73.4486 353.217 62.9441 352.499 54.6108 346.214C44.3449 338.472 41.2636 325.214 47.7296 316.601C48.1643 316.022 48.6368 315.472 49.1439 314.955C56.2641 310.394 66.7651 311.115 75.1019 317.397C85.3674 325.142 88.4486 338.401 81.9831 347.013Z" fill="white"/>
                            <path d="M34.3557 314.336C44.5264 306.467 47.2907 292.971 40.5299 284.192C33.7692 275.413 20.0435 274.676 9.87276 282.545C-0.297966 290.414 -3.06228 303.91 3.69849 312.689C10.4593 321.468 24.185 322.205 34.3557 314.336Z" fill="#6D7ECE"/>
                            <path opacity="0.2" d="M31.1366 312.078C23.2599 318.176 13.2496 319.106 5.99344 315.136C5.15363 314.395 4.38662 313.574 3.70291 312.687C-3.06124 303.91 -0.297077 290.412 9.87326 282.545C17.75 276.451 27.7603 275.518 35.013 279.484C35.8545 280.226 36.6226 281.047 37.3066 281.937C44.069 290.713 41.3048 304.211 31.1366 312.078Z" fill="white"/>
                            </g>
                        <defs>
                            <clipPath id="clip0_492_6848">
                                <rect width="313" height="379" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>

                </div>

    


            </Container>

        </div>

    )

}