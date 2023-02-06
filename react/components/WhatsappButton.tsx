import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  logo: string;
  phone: string;
  message: string;
  width: number;
  height: number;
};

const WhatsappButton = ({ logo, phone, message, width, height }: Props) => (
  <div className="fixed bottom-2 right-2 flex flexColumn"
    style={{
      zIndex: 9999,
      backgroundColor: '#fb441f',
      borderRadius: '50%',
      boxShadow: '0 0 10px 0 rgba(0,0,0,0.5)',
      width: 46,
      height: 46,
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <a
      href={`https://api.whatsapp.com/send?phone=${phone}&text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={logo} alt="Whatsapp Logo"
        width={width}
        height={height}
      />
    </a>
  </div>
);

WhatsappButton.propTypes = {
  logo: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

WhatsappButton.schema = {
  title: 'Whatsapp Button',
  type: 'object',
  properties: {
    logo: {
      title: 'Logo',
      type: 'string',
      'widget': {
        "ui:widget": "image-uploader"
      }
    },
    phone: {
      title: 'Phone',
      description: 'Phone number with country code',
      type: 'string',
    },
    message: {
      title: 'Message',
      description: 'Message to send',
      type: 'string',
      widget: {
        'ui:widget': 'textarea',
      },
    },
    width: {
      title: 'Width',
      type: 'number',
      default: 30,
    },
    height: {
      title: 'Height',
      type: 'number',
      default: 30,
    },
  },
};



export default WhatsappButton;
