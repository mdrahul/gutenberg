/**
 * External dependencies
 */
import { shallow } from 'enzyme';

/**
 * Internal dependencies
 */
import IconButton from '../';

describe( 'IconButton', () => {
	describe( 'basic rendering', () => {
		it( 'should render an top level element with only a class property', () => {
			const iconButton = shallow( <IconButton /> );
			expect( iconButton.hasClass( 'components-icon-button' ) ).toBe( true );
			expect( iconButton.prop( 'aria-label' ) ).toBeUndefined();
		} );

		it( 'should render a Dashicon component matching the wordpress icon', () => {
			const iconButton = shallow( <IconButton icon="wordpress" /> );
			expect( iconButton.find( 'Dashicon' ).shallow().hasClass( 'dashicons-wordpress' ) ).toBe( true );
		} );

		it( 'should render child elements when passed as children', () => {
			const iconButton = shallow( <IconButton children={ <p className="test">Test</p> } /> );
			expect( iconButton.find( '.test' ).shallow().text() ).toBe( 'Test' );
		} );

		it( 'should add an aria-label when the label property is used', () => {
			const iconButton = shallow( <IconButton label="WordPress" /> );
			expect( iconButton.prop( 'aria-label' ) ).toBe( 'WordPress' );
		} );

		it( 'should add an additional className', () => {
			const iconButton = shallow( <IconButton className="test" /> );
			expect( iconButton.hasClass( 'test' ) ).toBe( true );
		} );

		it( 'should add an additonal prop to the IconButton element', () => {
			const iconButton = shallow( <IconButton test="test" /> );
			expect( iconButton.props().test ).toBe( 'test' );
		} );
	} );
} );
